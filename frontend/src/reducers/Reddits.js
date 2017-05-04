import Immutable from 'immutable';
import { GET_FEED, CREATE_FAVORITE, REMOVE_FAVORITE } from '../constants/ActionTypes';

const initialState = Immutable.fromJS([]);

export default function reddits(state = initialState, action) {
  switch (action.type) {
  case GET_FEED:
    return Immutable.fromJS(action.feed);
  case CREATE_FAVORITE:
    state.push(Immutable.toJS(action.newFavorite));
  case REMOVE_FAVORITE:
    return state.filter((favorite) => {
      return favorite.get('id') !== action.redditId;
    });

  default:
    return state;
  }
}
