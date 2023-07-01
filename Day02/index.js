// Day 2 Topic 1: Multiple Reducers
// CombineReducers


import axios from "axios";
import { applyMiddleware, combineReducers, createStore } from "redux";
import logger from 'redux-logger';
import thunk from "redux-thunk";

const history = [];


// Action Type
const init = 'initUser';
const inc = 'increament';
const incByAmt='increaseByValue'
const dec = 'decreament';

const store = createStore(combineReducers({
    account: accountReducer,
    bonus:bonusReducer
}),applyMiddleware(logger.default,thunk.default))

// Reducer 1
function accountReducer(state = { amount: 1 }, action) {
    switch (action.type) {
        case init:
            return { amount: action.payload }
        case inc:
            return { amount: state.amount + 1 }
        case dec:
            return { amount: state.amount - 1 }
        case incByAmt:
            return {amount:state.amount + action.payload}
        default:
            return state;
    }
}
// Reducer 2
function bonusReducer(state = { points: 0 }, action) {
    switch (action.type) {
        case incByAmt: 
            if(action.payload>100)
                    return {points:state.points + 3 }
        default:
            return state;
    }
}


// Action creator
 function getUser(id) {
    return async (dispatch, getState)=>{
        const { data } = await axios.get(`http://localhost:3000/account/${id}`);
        dispatch(increase(data.amount));
    }
}

function increase(value) {
    return {type:incByAmt,payload:value}
}

setTimeout(() => {
    store.dispatch(increase(200))
}, 2000);