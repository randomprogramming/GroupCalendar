import Axios from 'axios';
import {ME_URL} from '../../apiLinks';
import {ASSIGN_ACCOUNT} from './types';

export const fetchAccount = () => {
  return (dispatch) => {
    Axios({
      method: 'GET',
      url: ME_URL,
    })
      .then((res) => dispatch(assignAccount({...res.data})))
      // TODO: Handle this error somehow
      .catch((err) => console.log(err));
  };
};

export const assignAccount = (account) => ({
  type: ASSIGN_ACCOUNT,
  payload: account,
});
