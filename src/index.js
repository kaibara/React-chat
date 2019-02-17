import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux'
import ChatApp from './components/ChatApp'
import auth from './reducers/auth'

const RootReducer = combineReducers({auth});
const store = createStore(RootReducer);

ReactDOM.render(
  <Provider store={ store }>
    <ChatApp />
  </Provider>,
  document.getElementById('root')
)