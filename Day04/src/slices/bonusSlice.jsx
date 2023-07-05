import { createAction, createSlice } from "@reduxjs/toolkit";
import { increament } from "./accountSlice";

const initialState = {
    points:2
}
//Yedi accountslice ko amount badhyo vane bonus pani badhne case ma
// We need to create action first

const incAmount=createAction('account/incByAmt') //yo redux dev tool ko inspctor bata tanna milxa
export const bonusSlice = createSlice({
    name: 'bonus',
    initialState,
    reducers: {
        increamentBonus: (state) => {
            state.points +=1
        }
    },
    extraReducers: (builder) => {
        builder.addCase(incAmount, (state, action) => {
            if (action.payload > 5) {
                state.points += 2;
            }
            else {
                state.points += 1;
            }
            
        })
    }
})

export const {increamentBonus} = bonusSlice.actions;

export default bonusSlice.reducer;