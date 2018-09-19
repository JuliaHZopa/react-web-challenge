export const UPDATE_ERRORS = 'UPDATE_ERRORS'

export const updateErrors = (errors: object) => {
  return {
    type: UPDATE_ERRORS,
    errors
  }
}
