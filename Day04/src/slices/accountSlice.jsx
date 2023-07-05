import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    amount: 1
}

export const accountSlice = createSlice({
    name: 'account',
    initialState,
    reducers: {
        // Now when using redux toolkit no need to write switch case 
        // Follows immer so no need to fear of mutation and writing complex code to avoid mutation
        increament: (state) => {
            state.amount += 1
        },
        decreament: (state) => {
            state.amount -= 1;
        },
        incByAmt: (state,action)=> {
            state.amount += action.payload
        }
    }
})

// Export action creators
export const { increament, decreament, incByAmt } = accountSlice.actions;

// Export reducer itself
export default accountSlice.reducer;