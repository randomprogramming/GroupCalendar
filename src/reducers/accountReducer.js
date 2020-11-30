import {ASSIGN_ACCOUNT} from '../actions/types';

const initialState = {
  firstName: '',
  lastName: '',
  isLoggedIn: false,
};

export default (state = initialState, {type, payload}) => {
  switch (type) {
    case ASSIGN_ACCOUNT:
      return {...state, ...payload};

    default:
      return state;
  }
};
