import {applyMiddleware, createStore} from 'redux';
import rootReducer from './src/reducers/rootReducer';
import thunk from 'redux-thunk';

export default createStore(rootReducer, applyMiddleware(thunk));
