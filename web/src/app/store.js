import { configureStore } from "@reduxjs/toolkit";
import ratingReducer from '../components/rating/ratingSlice';
import categoriesReducer from '../components/categories/categoriesSlice';
import birthdateReducer from '../components/birthdate/birthdateSlice';
import recommendationsReducer from '../components/recommendations/recommendationsSlice';

export const store = configureStore({
    reducer: {
        rating: ratingReducer,
        categories: categoriesReducer,
        birthdate: birthdateReducer,
        recommendations: recommendationsReducer
    }
})