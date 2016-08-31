import { STUDENTS_LOAD } from '../constants/ActionTypes';

export const students = {
  // TODO use thunk to fetch the students
  load: () => ({
    type: STUDENTS_LOAD,
  })
};
