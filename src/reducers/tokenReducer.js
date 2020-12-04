import {CLEAR_TOKEN, SET_TOKEN} from '../actions/types';

const initialState = {
  token: '',
};

export default (state = initialState, {type, payload}) => {
  switch (type) {
    case SET_TOKEN:
      // Override the token if there is one
      return payload;
    case CLEAR_TOKEN:
      return initialState;
    default:
      return state;
  }
};
