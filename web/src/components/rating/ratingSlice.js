import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from '@reduxjs/toolkit'


const initialState = {
    minRating: -1
}

export const ratingSlice = createSlice({
    name: 'minRating',
    initialState,
    reducers: {
        chooseRating: (state,  action: PayloadAction<Item>) => {
            state.minRating = action.payload;
        }
    }
});

export const { chooseRating } = ratingSlice.actions;

export default ratingSlice.reducer;