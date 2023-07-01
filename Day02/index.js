// Day 2 Topic 1: Multiple Reducers


import axios from "axios";
import { applyMiddleware, createStore } from "redux";
import  logger from "redux-logger";
import thunk from "redux-thunk";

const history = [];


// Action Type
const init = 'initUser';
const inc = 'increament';
const dec = 'decreament';

const store=createStore(accountReducer,applyMiddleware(logger.default,thunk.default))

// Reducer 1
function accountReducer(state = { amount: 1 }, action) {
    switch (action.type) {
        case init:
            return { amount: action.payload }
        case inc:
            return { amount: state.amount + 1 }
        case dec:
            return { amount: state.amount - 1 }
        default:
            return state;
    }
}
// Reducer 2
function bonusReducer(state = { points: 0 }, account) {
    switch (action.type) {
        case inc: {
            return {points:state.bonus + 1 }
        }
    }
}
