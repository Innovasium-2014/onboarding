import Immutable from 'immutable';
import {
  GET_FEED,
  GET_FAVORITES,
  CREATE_FAVORITE,
  REMOVE_FAVORITE
} from '../constants/ActionTypes';

const initialState = Immutable.Map({
  feed: {},
  favorites: []
});

export default function reddits(state = initialState, action) {
  let newState = state;

  switch (action.type) {
  case GET_FEED:
    newState = state.set('feed', Immutable.fromJS(action.feed));
    return newState;
  case GET_FAVORITES:
    newState = state.set('favorites', Immutable.fromJS(action.favorites));
    return newState;
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
