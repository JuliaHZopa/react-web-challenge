import initialState from '../../initialState';
import updateErrors from '../updateErrorsReducer';

const action = {
  type: 'UPDATE_ERRORS',
  errors: {
    aField: 'An error',
  }
}

describe('updateErrorsReducer', () => {
  test('should update with new errors', () => {
    expect(updateErrors(initialState, action)).toEqual({...initialState, ...action.errors})
  });

  test('should update with new errors, whithout overwriting existing errors', () => {
    const newState = {
      ...initialState,
      errors: {
        anotherField: 'An existing error',
      }
    };

    const expected = {
      ...newState,
      ...action.errors
    };

    expect(updateErrors(newState, action)).toEqual(expected);
  });
})
