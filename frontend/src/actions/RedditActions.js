import $ from 'jquery';
import { GET_FEED, CREATE_FAVORITE, REMOVE_FAVORITE } from '../constants/ActionTypes';

export function getFeed(url) {
  return dispatch =>
  $.get(url).then(response => {
    dispatch({ type: GET_FEED, feed: response.data });
  });
}

export function createFavorite(url) {
  return dispatch =>
  $.get('http://localhost:3000/create_favorite', { url }).then(response => {
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
