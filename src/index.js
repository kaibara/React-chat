import React from 'react';
import ReactDOM from 'react-dom';
import AppContainer from './containers/AppContainer';
import {createStore} from 'redux';
import Reducer from './reducers/index.js'
import { Provider } from 'react-redux';

const store = createStore(Reducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

ReactDOM.render(
  <Provider store={store}>
    <AppContainer />
  </Provider>, document.getElementById('root'));
