export interface IInitialState {
  transaction: ITransaction;
  account: IAccount;
  errors?: object;
}

export interface ITransaction {
  amount?: number;
  reciever_name?: string;
  reciever_email?: string;
}

export interface IAccount {
  currentAmount: number,
  amountSent?: number;
  previousTransactions?: IPreviousTransactions[];
}

export interface IPreviousTransactions {
  amount: number;
  reciever_name: string;
  reciever_email: string;
}

const initialState = {
  account: {
    currentAmount: undefined,
    amountSent: undefined,
  },
  transaction: {
    amount: undefined,
    reciever_name: undefined,
    reciever_email: undefined,
  },
  errors: undefined,
}

export default initialState;
