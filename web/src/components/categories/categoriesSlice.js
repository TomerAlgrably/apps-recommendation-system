import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from '@reduxjs/toolkit'


const initialState = {
    selectedCategories: []
}

export const categoriesSlice = createSlice({
    name: 'categories',
    initialState,
    reducers: {
        categoriesChanged: (state,  action: PayloadAction<Item>) => {
            state.selectedCategories = action.payload;
        }
    }
});

export const { categoriesChanged } = categoriesSlice.actions;

export default categoriesSlice.reducer;