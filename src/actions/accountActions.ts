import { ITransaction } from "../initialState";

export const SET_ACCOUNT_BALANCE = 'SET_ACCOUNT_BALANCE'
export const SAVE_TRANSACTION_DATA = 'SAVE_TRANSACTION_DATA';

export const setCurrentAmount = (newAmount: number) => {
  return {
    type: SET_ACCOUNT_BALANCE,
    newAmount
  }
}

export const saveTransaction = (transaction: ITransaction) => {
  return {
    type: SAVE_TRANSACTION_DATA,
    transaction
  }
}
