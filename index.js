import  ReactDOM from 'react-dom';
import  React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './src/store/store';
import SampleComponent from './src/components/Sample';

ReactDOM.render(<Provider store={store}>
    <SampleComponent />
  </Provider>,
  document.getElementById('app')
);

