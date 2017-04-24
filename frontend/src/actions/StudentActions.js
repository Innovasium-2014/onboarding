import $ from 'jquery';
import { STUDENTS_LOAD, STUDENTS_ADD, STUDENTS_REMOVE } from '../constants/ActionTypes';

export function load() {
  return dispatch => {
    // $.ajax({
    //   url: 'http://localhost:3000/get_students',
    //   headers: { 'Access-Control-Allow-Origin': 'http://localhost:3000' },
    //   type: 'GET',
    //   success: (response) => {
    //     dispatch({ type: STUDENTS_LOAD, students: response.data });
    //   }
    // });

    $.get('http://localhost:3000/get_students').then(response => {
      dispatch({
        type: STUDENTS_LOAD,
        students: response.data
      });
    });
  };
}

export function add(name) {
  return (dispatch) => {
    // $.ajax({
    //   url: 'http://localhost:3000/add_student',
    //   headers: { 'Access-Control-Allow-Origin': 'http://localhost:3000' },
    //   type: 'POST',
    //   data: { name },
    //   success: (response) => {
    //     dispatch({ type: STUDENTS_ADD, student: response.data });
    //   }
    // });

    $.post('http://localhost:3000/add_student', { name }).then(response => {
      dispatch({
        type: STUDENTS_ADD,
        student: response.data
      });
    });
  };
}

export function remove(id) {
  return (dispatch) => {
    $.ajax({
      url: 'http://localhost:3000/delete_student',
      headers: { 'Access-Control-Allow-Origin': 'http://localhost:3000' },
      type: 'DELETE',
      data: { id },
      success: () => {
        dispatch({ type: STUDENTS_REMOVE, id });
      }
    });
  };
}
