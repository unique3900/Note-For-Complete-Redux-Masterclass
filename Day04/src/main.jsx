import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { configureStore } from '@reduxjs/toolkit'
import accountReducer from '../src/slices/accountSlice.jsx';
import bonusReducer from '../src/slices/bonusSlice.jsx';
import {Provider} from 'react-redux'
// Create a store Similar to createStore
const store = configureStore({
  reducer: {
    account: accountReducer,
    bonus:bonusReducer
 }
})
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
        <App />
    </Provider>

  </React.StrictMode>,
)
