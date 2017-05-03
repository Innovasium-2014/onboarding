import $ from 'jquery';
import { GET_POSTS } from '../constants/ActionTypes';

export function getPosts(url) {
  return dispatch =>
  $.get(url).then(response => {
    dispatch({ type: GET_POSTS, jacob: response.data })
  })
}
