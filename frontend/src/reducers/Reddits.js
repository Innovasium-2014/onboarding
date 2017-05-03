import Immutable from 'immutable';
import { GET_FEED } from '../constants/ActionTypes';

const initialState = Immutable.fromJS([]);

export default function reddits(state = initialState, action) {
  switch (action.type) {
  case GET_FEED:
    return state.push(Immutable.fromJS(action.feed));

  default:
    return state;
  }
}
