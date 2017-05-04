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
  const feed = state.get('feed');

  switch (action.type) {
  case GET_FEED:
    newState = state.set('feed', Immutable.fromJS(action.feed));
    return newState;

  case GET_FAVORITES:
    newState = state.set('favorites', Immutable.fromJS(action.favorites));
    return newState;

  case CREATE_FAVORITE:
    return state.update('favorites', favorites => favorites.push(Immutable.fromJS(action.newFavorite)));

  case REMOVE_FAVORITE:
    newState = newState.toJS().favorites;
    newState = newState.filter((favorite) => {
      return favorite.id !== action.redditId;
    });
    return Immutable.fromJS({ feed: feed, favorites: newState });

  default:
    return state;
  }
}
