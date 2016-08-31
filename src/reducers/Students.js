import { STUDENTS_LOAD, STUDENTS_ADD, STUDENTS_REMOVE } from '../constants/ActionTypes';

const initialState = [];

export default function students(state = initialState, action) {
  switch (action.type) {
  case STUDENTS_LOAD:
    if (action.complete) {
      // update the students from the server
      return action.students;
    }
    return state;

  case STUDENTS_ADD:
    if (action.complete) {
      const newStudent = action.student;

      const newState = state.map(student => {
        if (student.id !== -1) {
          return student;
        }

        return newStudent;
      });

      return newState;
    }

    return state.concat([{ id: -1, name: action.name }]);

  case STUDENTS_REMOVE:
    return state.filter(student => student.id !== action.id);

  default:
    return state;
  }
}
