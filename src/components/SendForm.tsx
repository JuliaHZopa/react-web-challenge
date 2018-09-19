import * as React from "react";
import { connect } from "react-redux";
import {Dispatch, bindActionCreators} from "redux";

import { makeTransaction, updateTransactionData } from "../actions/transactionActions";
import { updateErrors } from "../actions/updateErrorsActions";
import { validateField } from "../validation/SendFormValidation";
import { saveTransaction, setCurrentAmount } from "../actions/accountActions";
import Field from "./Field";

interface ISendFormProps {
  actions: any;
}

interface IStateProps {
  transaction: {
    amount: number;
    reciever_name: string;
    reciever_email: string;
  }
  account: {
    currentAmount: number;
  };
  errors: any;
}

const validationMapping = {
  amount: ['isRequired', 'isLargerThanZero'],
  reciever_email: ['isRequired', 'isValidEmail'],
  reciever_name: ['isRequired', 'minLength2'],
}

class SendForm extends React.Component<ISendFormProps & IStateProps, any> {

  public constructor(props: ISendFormProps & IStateProps) {
    super(props);
  }

  public render() {
    return (
      <form>
        <Field
          type='text'
          name='reciever_name'
          value={this.props.transaction.reciever_name}
          handleOnChange={this.handleOnChange}
          placeholder={`Recipient's name`}
          label={`Recipient's name`}/>
        <Field
          type='text'
          name='reciever_email'
          value={this.props.transaction.reciever_email}
          handleOnChange={this.handleOnChange}
          placeholder={`Recipient's email`}
          label={`Recipient's email`}/>
        <Field
          type='number'
          name='amount'
          value={this.props.transaction.amount}
          handleOnChange={this.handleOnChange}
          placeholder={`Amount to send`}
          label={`Amount to send`}/>
        <button onClick={this.handleOnClick}>Send money</button>
      </form>
    )
  }

  private handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const fieldName = e.target.name;
    const data = {
      key: fieldName,
      value: e.target.value
    }

    this.props.actions.updateTransactionData(data)

    const validationResult = validateField(fieldName, e.target.value, validationMapping[fieldName]);
    this.props.actions.updateErrors(validationResult);
  }

  private isFormValid = () => {
    if (!this.props) {
      return false;
    }
    const errors = this.props.errors ? this.props.errors : false;
    return errors ? Object.keys(errors).every((error: string) => this.props.errors[error] === true) : false;
  }

  private handleOnClick = (e: React.MouseEvent) => {
    const currentAmount = this.props.account.currentAmount;
    e.preventDefault();
    if (this.isFormValid() && this.props.transaction.amount <= this.props.account.currentAmount) {

      // TODO: handleOnClick should not handle all of this.
      // TODO: Not here but add support for amountSent
      this.props.actions.makeTransaction(this.props.transaction);
      this.props.actions.saveTransaction(this.props.transaction);

      const newAmout = currentAmount - this.props.transaction.amount!;
      this.props.actions.setCurrentAmount(newAmout);

      this.props.actions.updateTransactionData({
        transaction: {
          amount: undefined,
          reciever_name: undefined,
          reciever_email: undefined,
        },
        errors: undefined
      });
    };
  }
}

const mapStateToProps = (state: IStateProps) => {
  return {
    transaction: {
      amount: state.transaction.amount,
      reciever_name: state.transaction.reciever_name,
      reciever_email: state.transaction.reciever_email,
    },
    account: {
      currentAmount: state.account.currentAmount
    },
    errors: state.errors,
  }
}

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    actions: bindActionCreators({
      updateTransactionData,
      updateErrors,
      makeTransaction,
      saveTransaction,
      setCurrentAmount
    }, dispatch)
  }
};
​
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SendForm)
