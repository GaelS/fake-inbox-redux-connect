import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider, connect } from "./react-redux/react-redux";

import store from './redux/store';

ReactDOM.render(
    <Provider store={store}>
      <App/>
    </Provider>,
  document.getElementById('root')
);
