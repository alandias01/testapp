import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Main from './client/components/main/main';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux'
import configureStore from './client/configureStore'

const store = configureStore({});

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Main />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
