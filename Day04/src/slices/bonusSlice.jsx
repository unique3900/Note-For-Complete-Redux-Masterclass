import { createSlice } from "@reduxjs/toolkit";
import { increament } from "./accountSlice";

const initialState = {
    points:0
}
export const bonusSlice = createSlice({
    name: 'bonus',
    initialState,
    reducers: {
        increament: (state) => {
            state.points +=1
        }
    }
})

export const {increament} = bonusSlice.actions;

export default bonusSlice.reducer;