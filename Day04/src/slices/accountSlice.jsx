import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
    amount: 3
}

// Using createAsyncThunk to bring data from db.json using json-server
// can dispatch this now from any component to make api call
export const getUserAmount = createAsyncThunk(
    // Action name ,similar to api name in node
    'account/getUserAmount',
    async (id)=> {
    const { data } = await axios.get(`http://localhost:8080/account/${id}`);
    return data.amount;
    }
)

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
    },
    extraReducers: (builder) => {
        builder.addCase(getUserAmount.fulfilled, (state, action) => {
            state.amount += parseInt(action.payload) 
        })
    }
})

// Export action creators
export const { increament, decreament, incByAmt } = accountSlice.actions;

// Export reducer itself
export default accountSlice.reducer;