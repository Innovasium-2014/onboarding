// import Immutable from 'immutable';
// import { ADD_STUDENT, REMOVE_STUDENT } from '../constants/ActionTypes';
//
// const initialState = Immutable.fromJS([]);
//
// export default function students(state = initialState, action) {
//   switch (action.type) {
//   case ADD_STUDENT:
//     return state.push(Immutable.fromJS(action.newStudent));
//   case REMOVE_STUDENT:
//     return state.filter((student) => {
//       return student.get('id') !== action.studentId;
//     });
//
//   default:
//     return state;
//   }
// }
