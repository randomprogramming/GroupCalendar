import Axios from 'axios';
import {ME_URL} from '../../apiLinks';
import {ASSIGN_ACCOUNT, CLEAR_ACCOUNT} from './types';
import * as Keychain from 'react-native-keychain';

export const fetchAccount = () => {
  return async (dispatch) => {
    // Password is the token
    const {password} = await Keychain.getGenericPassword();
    // Check if the token is present
    if (password) {
      // If it is, check if it is valid
      Axios({
        method: 'POST',
        url: ME_URL,
        headers: {
          authorization: password,
        },
      })
        // If we get a 200, it means we got a valid token
        .then((res) => dispatch(assignAccount({...res.data})))
        // If we get an error, clear the accountState and clear the token
        .catch((err) => {
          console.log('Error when fetching account: ', err);
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
      dispatch(fetchAccount());
    } else {
      dispatch(clearAccountState());
    }
  };
};

export const clearAccountState = () => ({
  type: CLEAR_ACCOUNT,
});

export const assignAccount = (account) => ({
  type: ASSIGN_ACCOUNT,
  payload: account,
});
