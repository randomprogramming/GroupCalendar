import {ASSIGN_ACCOUNT, CLEAR_ACCOUNT} from '../actions/types';

const initialState = {
  firstName: '',
  lastName: '',
  isLoggedIn: false,
};

export default (state = initialState, {type, payload}) => {
  switch (type) {
    case ASSIGN_ACCOUNT:
      return {...state, ...payload};
    case CLEAR_ACCOUNT:
      return initialState;
    default:
      return state;
  }
};
