import  React, { Component } from 'react';
import  ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './src/store/store';
import AppRoutes from './src/routes/routes';

ReactDOM.render(
  <Provider store={store}>
    <AppRoutes />
  </Provider>,
  document.getElementById('app'),
);

