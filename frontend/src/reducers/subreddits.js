import Immutable from 'immutable';
import { ADD_SUBREDDIT } from '../constants/ActionTypes';

const initialState = Immutable.fromJS([]);

export default function subreddits(state = initialState, action) {
  switch (action.type) {
  case ADD_SUBREDDIT:
    return Immutable.fromJS(action.newSubreddit);

  default:
    return state;
  }
}
