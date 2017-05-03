import Immutable from 'immutable';
import { GET_POSTS } from '../constants/ActionTypes';

const initialState = Immutable.fromJS([]);

export default function reddits(state = initialState, action) {
  switch (action.type) {
  case GET_POSTS:
    return Immutable.fromJS(action.jacob);

  default:
    return state;
  }
}
