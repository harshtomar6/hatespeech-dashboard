import { combineReducers } from 'redux';
import { userReducer } from './userReducer';
import { app } from './appReducer'

export default combineReducers({
  user: userReducer,
  app
});