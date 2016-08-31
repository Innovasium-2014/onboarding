import $ from 'jquery';
import { STUDENTS_LOAD, STUDENTS_ADD, STUDENTS_REMOVE } from '../constants/ActionTypes';

function processStudent(student) {
  return {
    ...student,
    created_at: new Date(student.created_at),
    updated_at: new Date(student.updated_at)
  };
}

function loadStudent() {
  return { type: STUDENTS_LOAD };
}

function loadStudentsSuccess(students) {
  return {
    type: STUDENTS_LOAD,
    complete: true,
    students
  };
}

export function load() {
  return (dispatch) => {
    dispatch(loadStudent());

    $.get('http://advance2.innovasium.com/get_buckets')
      .then(res => {
        const students = res.data.map(processStudent);
        dispatch(loadStudentsSuccess(students));
      });
  };
}

export function add(name) {
  return (dispatch) => {
    dispatch({ type: STUDENTS_ADD, name });

    $.post('http://advance2.innovasium.com/create_bucket', { name }).then(res => {
      dispatch({
        type: STUDENTS_ADD,
        complete: true,
        student: processStudent(res.data)
      });
    });
  };
}

export function remove(id) {
  return (dispatch) => {
    dispatch({ type: STUDENTS_REMOVE, id });

    $.ajax({
      url: 'http://advance2.innovasium.com/remove_bucket',
      method: 'post',
      type: 'json',
      data: { id }
    });
  };
}
