const emailRegEx = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

const rules = {
  isRequired: (fieldValue: string | number) => fieldValue.toString().length > 0 ? true : 'This field is required',
  minLength2: (fieldValue: string) => fieldValue.length >= 2 ? true : 'Your name must be 2 characters or longer',
  isLargerThanZero: (fieldValue: number) => fieldValue > 0 ? true : 'Please enter an amout larger than 0',
  isValidEmail: (fieldValue: string) => emailRegEx.test(fieldValue) ? true : 'Please enter a valid email',
}

export const validateField = (fieldName: string, fieldValue: string | number, rulesToCheck: string[]) => {
  const errors = rulesToCheck.map((rule: string) => {
    if(rules.hasOwnProperty(rule)) {
      return rules[rule](fieldValue);
    }

    // TODO: implement errorBounderies to catch invalid rulesNames
  })

  const isValid = errors.every((error: string | boolean) => error === true);

  return {[fieldName]: isValid ? isValid : errors.find((el: string | boolean) => typeof el === 'string')}
}
