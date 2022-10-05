import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from '@reduxjs/toolkit'


const initialState = {
    birthdate: new Date(new Date().setFullYear(new Date().getFullYear() - 15))

}

export const birthdateSlice = createSlice({
    name: 'birthdate',
    initialState,
    reducers: {
        chooseBirthdate: (state,  action: PayloadAction<Item>) => {
            state.birthdate = action.payload;
        }
    }
});

export const { chooseBirthdate } = birthdateSlice.actions;

export default birthdateSlice.reducer;