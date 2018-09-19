import { ITransaction } from "../initialState";

export const MAKE_TRANSACTION = 'MAKE_TRANSACTION'
export const UPDATE_TRANSACTION_DATA = 'UPDATE_TRANSACTION_DATA';

export const makeTransaction = (transactionData: {data: ITransaction}) => {
  return {
    type: MAKE_TRANSACTION,
    transactionData
  }
}

export const updateTransactionData = (transactionData: {key: string, value: string}) => {
  return {
    type: UPDATE_TRANSACTION_DATA,
    transactionData
  }
}
