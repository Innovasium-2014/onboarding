import Immutable from 'immutable';

const initialState = Immutable.fromJS([]);

export default function students(state = initialState, action) {
  switch (action.type) {
  // add the reducer cases here

  default:
    return state;
  }
}
