import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import registerServiceWorker from './registerServiceWorker';

import App from './components/App';
import initialState from './initialState';
import rootReducer from './reducers/rootReducer';

import './index.css';

const devToolsKey = '__REDUX_DEVTOOLS_EXTENSION__';
const enhancer: () => any = window[devToolsKey] ? window[devToolsKey]() : (f: any) => f;
const store = createStore(rootReducer, initialState, compose(applyMiddleware(), enhancer))

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
