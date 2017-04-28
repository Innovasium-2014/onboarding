import $ from 'jquery';
import { GET_STUDENTS, ADD_STUDENT, REMOVE_STUDENT, EDIT_STUDENT } from '../constants/ActionTypes';

export function getStudents(name) {
  return dispatch =>
  $.get('http://localhost:3000/get_students').then(response => {
    dispatch({ type: GET_STUDENTS, students: response.data });
  });
}

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

export function editStudent(id) {
  return dispatch =>
  $.post('http://localhost:3000/edit_student', { id }).then(response => {
    console.log(response);
    dispatch({ type: EDIT_STUDENT, editStudent: response.data });
  });
}
