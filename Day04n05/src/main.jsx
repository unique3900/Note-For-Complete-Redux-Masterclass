import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import accountReducer from '../src/slices/accountSlice.jsx';
import bonusReducer from '../src/slices/bonusSlice.jsx';
import {Provider} from 'react-redux'
import { adminApi } from './api/adminSlice.jsx'
// Create a store Similar to createStore
const store = configureStore({
  reducer: {
    account: accountReducer,
    bonus: bonusReducer,
    // From documentation template
    [adminApi.reducerPath]:adminApi.reducer
  },
  // from documentation template
  middleware: (getDefaultMiddleware) => 
    getDefaultMiddleware().concat(adminApi.middleware),
      
  
})
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
        <App />
    </Provider>

  </React.StrictMode>,
)
