import { IInitialState, IAccount } from '../initialState';
import { handleActions } from 'redux-actions';

const setCurrentAmount = (state: IInitialState, action: any) => {
  return {
    ...state,
    currentAmount: action.newAmount
  }
}

const setAmountSent = (state: IInitialState, action: any) => {
  return {
    ...state,
    amountSent: action.updatedAmountSent
  }
}

const saveTransaction = (state: IAccount, action: any) => {
  return {
    ...state,
    previousTransactions: state.previousTransactions ? state.previousTransactions.concat(action.transaction) : []
  }
}

export default handleActions<any, IInitialState>({
  ['SET_ACCOUNT_BALANCE']: setCurrentAmount,
  ['SET_AMOUNT_SENT']: setAmountSent,
  ['SAVE_TRANSACTION_DATA']: saveTransaction,
}, {});
