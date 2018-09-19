import { validateField } from '../SendFormValidation';

describe('SendFormValidation', () => {
  describe('isRequired', () => {
    test('it returns true if a value is provided', () => {
      expect(validateField('fieldName', 'Value', ['isRequired'])).toEqual({fieldName: true});
    });

    test('it returns an error if no value is provided', () => {
      expect(validateField('fieldName', '', ['isRequired'])).toEqual({fieldName: 'This field is required'});
    });
  });

  describe('minLength2', () => {
    test('it returns true if a valid value is provided', () => {
      expect(validateField('fieldName', 'Value', ['minLength2'])).toEqual({fieldName: true});
    });

    test('it returns an error if invalid value is provided', () => {
      expect(validateField('fieldName', 'v', ['minLength2'])).toEqual({fieldName: 'Your name must be 2 characters or longer'});
    });
  });

  describe('isLargerThanZero', () => {
    test('it returns true if a valid value is provided', () => {
      expect(validateField('fieldName', 12, ['isLargerThanZero'])).toEqual({fieldName: true});
    });

    test('it returns an error if invalid value is provided', () => {
      expect(validateField('fieldName', -12, ['isLargerThanZero'])).toEqual({fieldName: 'Please enter an amout larger than 0'});
    });
  });

  describe('isValidEmail', () => {
    test('it returns true if a valid value is provided', () => {
      expect(validateField('fieldName', 'valid@email', ['isValidEmail'])).toEqual({fieldName: true});
    });

    test('it returns an error if invalid value is provided', () => {
      expect(validateField('fieldName', 'invalid email', ['isValidEmail'])).toEqual({fieldName: 'Please enter a valid email'});
    });
  });
})
