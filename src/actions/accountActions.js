import Axios from 'axios';
import {ME_URL} from '../../apiLinks';
import {ASSIGN_ACCOUNT, CLEAR_ACCOUNT} from './types';
import * as Keychain from 'react-native-keychain';

export const fetchAccountFromToken = (token) => {
  return async (dispatch) => {
    Axios({
      method: 'GET',
      url: ME_URL,
      headers: {
        authorization: token,
      },
    })
      // If we get a 200, it means we got a valid token
      .then((res) => {
        dispatch(assignAccount({...res.data}));
      })
      // If we get an error, clear the accountState and clear the token
      .catch((err) => {
        console.log(
          'Error when fetching account:',
          err.response.data.message || 'Unknown error',
        );
        Keychain.resetGenericPassword();
        dispatch(clearAccountState());
      });
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
