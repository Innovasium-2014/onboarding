import { combineReducers } from 'redux';
import students from './Students';
import reddits from './Reddits';

export default combineReducers({
  students,
  reddits
});
