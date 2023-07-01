import axios from "axios";
import { applyMiddleware, combineReducers, createStore } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";

// Custom Types
const salIncrease = '/salary/inc';
const salDecrease = '/salary/dec';
const addBonus = '/bonus/inc';
const deductBonus = '/bonus/dec';

// Creating a store with middlewares

const store = createStore(combineReducers(
    {
        salary: employeeSalaryReducer,
        bonus: employeeExtraTimeBonus
    }), applyMiddleware(logger.default, thunk.default));



// Creating reducers
// Reducer 1:
function employeeSalaryReducer  (state={baseSalary:10000},action)  {
    switch (action.type) {
        case salIncrease:
            // Returns the state
            return { salary: state.baseSalary + action.payload } 
        case salDecrease:
            return { salary: state.baseSalary - action.payload } 
        
        default:
            return state;
    }
}

// Reducer 2:
function employeeExtraTimeBonus  (state={bonus:0},action)  {
    switch (action.type) {
        case addBonus:
            return { bonusAmount: state.bonus + action.payload }
        case deductBonus:
            return { bonusAmount: state.bonus - action.payload }
        default:
            return state;
    }
}

// API Calling and dispatch
const getData = (id) => {
    //Returns a function
    // Start the JSON server before initiating this code block
   return async (dispatch, getState) => {
       const { data } = await axios.get(`http://localhost:3000/account/${id}`);
       //Send this data to action creator
       dispatch(increaseSalary(data.amount));
       dispatch(increaseBonus(data.amount/20))
       
    }
}

const increaseSalary = (value) => {
    return {type:increaseSalary,payload:value}
}

const increaseBonus = (value) => {
    return {type:addBonus,payload:value}
}

setTimeout(() => {
    store.dispatch(getData(1));
},2000)