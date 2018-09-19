import { makeTransaction, updateTransactionData } from '../transactionActions';

const makeTransactionData = {
  data: {
    amount: 100,
    reciever_email: 'example@example.com',
    reciever_name: 'Name',
  }
}

const transactionData = {
  key: 'A key',
  value: 'A value',
}

describe('transactionActions', () => {
  test('should call makeTransaction and return an action object', () => {

    const expected =  {
      transactionData: {...makeTransactionData},
      type: 'MAKE_TRANSACTION',
    }

    expect(makeTransaction(makeTransactionData)).toEqual(expected);
  });

  test('should update transaction data', () => {

    const expected =  {
      transactionData: {...transactionData},
      type: 'UPDATE_TRANSACTION_DATA',
    }

    expect(updateTransactionData(transactionData)).toEqual(expected);
  });
})
