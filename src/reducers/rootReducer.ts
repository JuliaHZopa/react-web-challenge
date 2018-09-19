import transaction from './transactionReducer';
import errors from './updateErrorsReducer';
import account from './accountReducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  transaction,
  errors,
  account
})

export default rootReducer
