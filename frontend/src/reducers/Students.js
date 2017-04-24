import Immutable from 'immutable';
import { STUDENTS_LOAD, STUDENTS_ADD, STUDENTS_REMOVE } from '../constants/ActionTypes';

const initialState = Immutable.fromJS([]);

export default function students(state = initialState, action) {
  switch (action.type) {
  case STUDENTS_LOAD:
    return Immutable.fromJS(action.students);

  case STUDENTS_ADD:
    return state.push(Immutable.fromJS({
      id: action.student.id, name: action.student.name
    }));

  case STUDENTS_REMOVE:
    return state.filter(student => student.get('id') !== action.id);

  default:
    return state;
  }
}
