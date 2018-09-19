import * as React from "react";
import { Dispatch, bindActionCreators } from "redux";
import { connect } from "react-redux";
import { setCurrentAmount } from "../actions/accountActions";
import PreviousTransactions from "./PreviousTransactions";
import { IPreviousTransactions } from "../initialState";
import CircularGraphic from "./circulargraphic";

interface IAccount {
  actions: any;
}

interface IStateProps {
  account: {
    currentAmount: number;
    amountSent: number;
    previousTransactions?: IPreviousTransactions[];
  }
}

class Account extends React.Component<IAccount & IStateProps, any> {

  public constructor(props: IAccount & IStateProps) {
    super(props);
  }

  // I'd like to ask the back end for this instead
  public componentDidMount() {
    this.props.actions.setCurrentAmount(1000);
  }

  public componentDidUpdate(prevProps: IStateProps) {
    if(prevProps.account.currentAmount !== this.props.account.currentAmount) {
      this.forceUpdate()
    }
  }

  public render() {
    const previousTransactions = this.props.account.previousTransactions;

    return (
      <React.Fragment>
        <CircularGraphic amountLeft={this.props.account.currentAmount} amountSent={this.props.account.amountSent}/>
        {this.props.account.currentAmount}
        {previousTransactions && previousTransactions.length > 0 ? <PreviousTransactions transactionList={previousTransactions} /> : 'No previous transactions'}
      </React.Fragment>
    )
  }
}

const mapStateToProps = (state: IStateProps) => {
  return {
    account: {
      currentAmount: state.account.currentAmount,
      previousTransactions: state.account.previousTransactions,
    }
  }
}

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    actions: bindActionCreators({
      setCurrentAmount,
    }, dispatch)
  }
};
​
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Account)
