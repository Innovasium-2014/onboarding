import $ from 'jquery';
import { ADD_STUDENT, REMOVE_STUDENT } from '../constants/ActionTypes';

export function addStudent(name) {
  return dispatch =>
  $.post('http://localhost:3000/add_student', { name }).then(response => {
    dispatch({ type: ADD_STUDENT, newStudent: response.data });
  });
}

export function removeStudent(id) {
  return dispatch =>
  $.ajax({
    url: 'http://localhost:3000/remove_student',
    method: 'DELETE',
    data: { id },
    success: (response) => dispatch({ type: REMOVE_STUDENT, studentId: id })
  });
}
