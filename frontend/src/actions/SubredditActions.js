import $ from 'jquery';
import { ADD_SUBREDDIT } from '../constants/ActionTypes';

export function addsubreddit(url) {
  return dispatch =>
  $.get(url).then(response => {
    dispatch({ type: GET_POSTS, jacob: response.data })
  })
}
