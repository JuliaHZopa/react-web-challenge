import { IInitialState, ITransaction } from "../initialState";
import {handleActions} from 'redux-actions';

const makeTransaction = (state: ITransaction, action: any) => {
  return {
    ...state,
    ...action.value
  }
}

const updateTransactionData = (state: ITransaction, action: any) => {
  return {
    ...state,
    [action.transactionData.key]: action.transactionData.value
  }
}

export default handleActions<any, IInitialState>({
  ['MAKE_TRANSACTION']: makeTransaction,
  ['UPDATE_TRANSACTION_DATA']: updateTransactionData,
}, {});
