import { createStore } from 'redux';

//Store

//Create store is depricated Now
//Use configureStore now
const store = createStore(reducer);

function reducer(state={amount:1}, action){

    if (action.type == 'increament') {
        return {amount:state.amount+1}
    }


    //Reducer always returns the state
    // We can return new state after calculation
    // return state;
}


//Action
// Action is a convention
// Not defined by Default only a convention

store.dispatch({ type: 'increament' });

//global state
console.log(store.getState());