import $ from 'jquery';
import {
  GET_FEED,
  GET_FAVORITES,
  CREATE_FAVORITE,
  REMOVE_FAVORITE
} from '../constants/ActionTypes';

export function getFeed(url) {
  return dispatch =>
  $.get(url).then(response => {
    dispatch({ type: GET_FEED, feed: response.data });
  });
}

export function getFavorites() {
  return dispatch =>
  $.get('http://localhost:3000/get_favorites').then(response => {
    dispatch({ type: GET_FAVORITES, favorites: response.data });
  });
}

export function createFavorite(name) {
  return dispatch =>
  $.post('http://localhost:3000/create_favorite', { name }).then(response => {
    dispatch({ type: CREATE_FAVORITE, newFavorite: response.data });
  });
}

export function removeFavorite(id) {
  return dispatch =>
  $.ajax({
    url: 'http://localhost:3000/remove_favorite',
    method: 'DELETE',
    data: { id },
    success: (response) => dispatch({ type: REMOVE_FAVORITE, redditId: id })
  });
}
