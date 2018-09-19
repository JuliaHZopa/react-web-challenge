import * as React from 'react';
import SendForm from './SendForm';
import Account from './Account';

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <SendForm />
        <Account />
      </div>
    );
  }
}

export default App;
