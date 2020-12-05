import {clearAccountState} from './accountActions';
import {CLEAR_TOKEN, SET_TOKEN} from './types';
import Keychain from 'react-native-keychain';
import {fetchAccountFromToken} from './accountActions';

export const checkKeychainForToken = () => {
  return async (dispatch) => {
    const {password} = await Keychain.getGenericPassword();
    // Check if the token is present
    if (password) {
      dispatch(processToken(password));
    } else {
      // If not make sure the state is cleared
      dispatch(clearToken());
      dispatch(clearAccountState());
    }
  };
};

export const processToken = (token) => {
  return async (dispatch) => {
    // Save the token in keychain
    const credentials = await Keychain.setGenericPassword('token', token);

    if (credentials) {
      console.log('Stored token, fetching account.');
      // Save tje token in redux
      dispatch(setToken(token));
    } else {
      console.log('Token not stored, clearing account state.');
      dispatch(clearAccountState());
    }
  };
};

// Whenever we set a new token, make sure we update the account so that we keep them in sync
// Don't export this function or else the Keychain stored token and the redux
// stored token might not be in sync also.
const setToken = (token) => {
  return (dispatch) => {
    dispatch(fetchAccountFromToken(token));

    dispatch({
      type: SET_TOKEN,
      payload: {token},
    });
  };
};

export const clearToken = () => ({
  type: CLEAR_TOKEN,
});
