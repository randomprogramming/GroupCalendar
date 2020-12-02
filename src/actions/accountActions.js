import Axios from 'axios';
import {ME_URL} from '../../apiLinks';
import {ASSIGN_ACCOUNT, CLEAR_ACCOUNT} from './types';
import * as Keychain from 'react-native-keychain';

export const fetchAccount = () => {
  // Keychain.resetGenericPassword();
  return async (dispatch) => {
    // Password is the token
    const {password} = await Keychain.getGenericPassword();
    // Check if the token is present
    if (password) {
      // If it is, check if it is valid
      Axios({
        method: 'GET',
        url: ME_URL,
        headers: {
          authorization: password,
        },
      })
        // If we get a 200, it means we got a valid token
        .then((res) => dispatch(assignAccount({...res.data})))
        // If we get an error, clear the accountState and clear the token
        .catch((err) => {
          console.log(
            'Error when fetching account:',
            err.response.data.message,
          );
          Keychain.resetGenericPassword();
          dispatch(clearAccountState());
        });
    } else {
      // If we don't have an token, make sure that the redux store is clear
      // even though it SHOULD be clear already, just to make sure
      dispatch(clearAccountState());
    }
  };
};

export const storeToken = (token) => {
  return async (dispatch) => {
    const credentials = await Keychain.setGenericPassword('token', token);
    // If the token successfully saved, fetch the account, else clear the account
    if (credentials) {
      console.log('Stored token, fetching account.');
      dispatch(fetchAccount());
    } else {
      console.log('Token not stored, clearing account state.');
      dispatch(clearAccountState());
    }
  };
};

export const clearAccountState = () => ({
  type: CLEAR_ACCOUNT,
});

export const assignAccount = (account) => ({
  type: ASSIGN_ACCOUNT,
  // Logged in is true if there's an email and the email has some length
  payload: {...account, isLoggedIn: account.email && account.email.length > 0},
});
