import { createStore } from 'redux';

// Topic 2 Day01: Concept of Middleware
import logger from 'redux-logger';

//Store

//Create store is depricated Now
//Use configureStore now
const store = createStore(reducer, applyMiddleware(logger.default)); //.default because module version use gareko require use garda pardaina


const history = [];

function reducer(state={amount:1}, action){

    if (action.type == 'increament') {

        // Donot mutate the original state for eg
        // state.amount=state.amount+1
        /* return state;  */

        // instead do:
        return {amount:state.amount+1}
    }

    if (action.type == 'decreament') {
        return {
            amount: state.amount - 1
        }
    }

    if (action.type == 'increaseByAmount') {
        return {
            amount: state.amount + action.payload
        }
    }


    //Reducer always returns the state
    // We can return new state after calculation


    /*  return state; */
}


//Action
// Action is a convention
// Not defined by Default only a convention

store.dispatch({ type: 'increament' });

// Day 01: Topic 3 Action Creators

const funcInc = () => {
    return {type:'increament'}
}
setInterval(() => {
    // store.dispatch({type:'decreament'})
    // store.dispatch({ type: 'increaseByAmount',payload:10 });
    store.dispatch(funcInc())
},5000)





