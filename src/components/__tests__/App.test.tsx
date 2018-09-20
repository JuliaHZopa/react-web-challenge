import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './../App';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import initialState from '../../initialState';

const middlewares: any = []
const mockStore = configureStore(middlewares)

const store = mockStore(initialState);

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Provider store={store}><App /></Provider>, div);
  ReactDOM.unmountComponentAtNode(div);
});
