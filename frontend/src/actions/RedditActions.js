import $ from 'jquery';
import { GET_FEED } from '../constants/ActionTypes';

export function getFeed(url) {
  return dispatch =>
  $.get(url).then(response => {
    dispatch({ type: GET_FEED, feed: response.data });
  });
}
