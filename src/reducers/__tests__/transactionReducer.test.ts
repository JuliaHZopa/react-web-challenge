import initialState from '../../initialState';
import transactionReducer from '../transactionReducer';

const makeTractionAction = {
  type: 'MAKE_TRANSACTION',
  value: {
    aKey: 'A value',
  }
}

const updateTractionDataAction = {
  type: 'UPDATE_TRANSACTION_DATA',
  transactionData: {
    key: "a_key",
    value: "a value"}
}

describe('transactionReducer', () => {
  test('should makeTransaction', () => {
    expect(transactionReducer(initialState.transaction, makeTractionAction)).toEqual({...initialState.transaction, ...makeTractionAction.value})
  });

  test('should update transaction', () => {

    const expected = {
      ...initialState,
      [updateTractionDataAction.transactionData.key]: updateTractionDataAction.transactionData.value
    };

    expect(transactionReducer(initialState, updateTractionDataAction)).toEqual(expected);
  });
})
