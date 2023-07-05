import { createSlice } from "@reduxjs/toolkit";
import { increament } from "./accountSlice";

const initialState = {
    points:0
}
export const bonusSlice = createSlice({
    name: 'bonus',
    initialState,
    reducers: {
        increamentBonus: (state) => {
            state.points +=1
        }
    }
})

export const increamentBonus = bonusSlice.actions;

export default bonusSlice.reducer;