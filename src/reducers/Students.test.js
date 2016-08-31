import { expect } from 'chai';

import { STUDENTS_REMOVE } from '../constants/ActionTypes';
import student from './Students';

describe('student reducer', () => {
  it('should start empty', () => {
    expect(student(undefined, {})).to.eql([]);
  });

  it('should remove a student on STUDENTS_REMOVE', () => {
    const state = [
      { id: 1, name: 'Julian' },
      { id: 2, name: 'Andrew' },
      { id: 3, name: 'William' }
    ];

    const action = { type: STUDENTS_REMOVE, id: 2 };

    expect(student(state, action)).to.eql([
      { id: 1, name: 'Julian' },
      { id: 3, name: 'William' }
    ]);
  });
});
