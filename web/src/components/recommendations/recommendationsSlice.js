import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from '@reduxjs/toolkit'


const initialState = {
    recommendations: []
}

export const recommendationsSlice = createSlice({
    name: 'recommendations',
    initialState,
    reducers: {
        recommendationsChanged: (state,  action: PayloadAction<Item>) => {
            state.recommendations = action.payload;
        }
    }
});

export const { recommendationsChanged } = recommendationsSlice.actions;

export default recommendationsSlice.reducer;