import { createStore } from 'redux';

//Store

//Create store is depricated Now
//Use configureStore now
const store = createStore(reducer);

const history = [];

function reducer(state={amount:1}, action){

    if (action.type == 'increament') {

        // Donot mutate the original state for eg
        // state.amount=state.amount+1
        // return state;

        // instead do:
        return {amount:state.amount+1}
    }


    //Reducer always returns the state
    // We can return new state after calculation
    // return state;
}

//global state
//When state change automatically subscribe call huncha
store.subscribe(() => {
    history.push(store.getState());
    console.log(history)
})

//Action
// Action is a convention
// Not defined by Default only a convention=

setInterval(()=>{
    store.dispatch({ type: 'increament' });
},2000)





