import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux';
import { applyMiddleware, combineReducers, createStore } from 'redux';
import { accountReducer } from './reducers/accounts';
import { bonusReducer } from './reducers/bonus';

const store = createStore(combineReducers({account:accountReducer,bonus:bonusReducer},applyMiddleware(logger,thunk)))

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <App/>
    </Provider>
  </React.StrictMode>,
)
