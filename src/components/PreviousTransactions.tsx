import * as React from 'react';
import { IPreviousTransactions } from '../initialState';

interface IPreviousTransactionsProps {
  transactionList: IPreviousTransactions[]
}

const PreviousTransactions = ({transactionList}: IPreviousTransactionsProps) => {
  return (
    <div>
      {transactionList.map((transaction: IPreviousTransactions, i: number) => {
        return (<div className='previous-transaction' key={i}>
          <span className='reciever'>
            {transaction.reciever_name}
          </span>
          <span className='amount'>
            {transaction.amount}
          </span>
        </div>);
      })}
    </div>
  )
}

export default PreviousTransactions;
