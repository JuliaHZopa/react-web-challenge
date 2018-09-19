import { updateErrors } from "../updateErrorsActions";

const errors = {
  a_field: 'An error',
}

describe('updateErrorsActions', () => {
  test('should call updateErrors and return an action object', () => {

    const expected =  {
      errors: {...errors},
      type: 'UPDATE_ERRORS',
    }

    expect(updateErrors(errors)).toEqual(expected);
  });
});
