import { combineReducers } from 'redux';
import students from './Students';
import subreddits from './subreddits';
import reddits from './Reddits';

export default combineReducers({
  students,
  subreddits,
  reddits
});
