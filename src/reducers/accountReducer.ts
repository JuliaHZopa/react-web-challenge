import { IInitialState, ITransaction } from '../initialState';
import { handleActions } from 'redux-actions';

const setCurrentAmount = (state: IInitialState, action: any) => {
  return {
    ...state,
    currentAmount: action.newAmount
  }
}

const saveTransaction = (state: ITransaction, action: any) => {
  return {
    ...state,
    previousTransactions: [{...action.transaction}]
  }
}

export default handleActions<any, IInitialState>({
  ['SET_ACCOUNT_BALANCE']: setCurrentAmount,
  ['SAVE_TRANSACTION_DATA']: saveTransaction,
}, {});
