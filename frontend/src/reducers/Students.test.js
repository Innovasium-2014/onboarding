import Immutable from 'immutable';
import { expect } from 'chai';
import { STUDENTS_REMOVE, STUDENTS_ADD } from '../constants/ActionTypes';
import student from './Students';

describe('student reducer', () => {
  it('should start empty', () => {
    expect(student(undefined, {})).to.eql(Immutable.fromJS([]));
  });

  it('should add a student on STUDENTS_ADD', () => {
    const state = Immutable.fromJS([]);
    const action = { type: STUDENTS_ADD,
      student: { id: 1, name: 'player1' } };

    expect(student(state, action)).to.eql(Immutable.fromJS([
      { id: 1, name: 'player1' }
    ]));
  });

  it('should remove a student on STUDENTS_REMOVE', () => {
    const state = Immutable.fromJS([
      { id: 1, name: 'Julian' },
      { id: 2, name: 'Andrew' },
      { id: 3, name: 'William' }
    ]);

    const action = { type: STUDENTS_REMOVE, id: 2 };

    expect(student(state, action)).to.eql(Immutable.fromJS([
      { id: 1, name: 'Julian' },
      { id: 3, name: 'William' }
    ]));
  });
});
