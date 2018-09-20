import initialState from '../../initialState';
import accountReducer from '../accountReducer';
import { SET_ACCOUNT_BALANCE } from '../../actions/accountActions';

describe('accountReducer', () => {
  test('should set new currentAmount', () => {

    const setCurrentAmountAction = {
      type: SET_ACCOUNT_BALANCE,
      newAmount: 1000
    };

    expect(accountReducer(initialState.account.currentAmount, setCurrentAmountAction)).toEqual({
      currentAmount: setCurrentAmountAction.newAmount
    })
  });
})
