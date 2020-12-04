import {combineReducers} from 'redux';
import accountReducer from './accountReducer';
import tokenReducer from './tokenReducer';

export default combineReducers({
  accountReducer,
  tokenReducer,
});
