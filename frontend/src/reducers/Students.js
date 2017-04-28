import Immutable from 'immutable';
import { GET_STUDENTS, ADD_STUDENT, REMOVE_STUDENT, EDIT_STUDENT } from '../constants/ActionTypes';

const initialState = Immutable.fromJS([]);

export default function students(state = initialState, action) {
  switch (action.type) {
  case GET_STUDENTS:
    return Immutable.fromJS(action.students);

  case ADD_STUDENT:
    return state.push(Immutable.fromJS(action.newStudent));

  case REMOVE_STUDENT:
    return state.filter((student) => {
      return student.get('id') !== action.studentId;
    });

  case EDIT_STUDENT:
    const index = state.findIndex((student) => student.get('id') === action.editStudent.id);
    return state.set(index, Immutable.fromJS(action.editStudent));
  default:
    return state;
  }
}
