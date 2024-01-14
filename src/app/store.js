import { configureStore } from "@reduxjs/toolkit";
import postReducer from "../features/posts/postSlice";
import categoriesReducer from "../features/categories/categoriesSlice";

export const store = configureStore({
    reducer: {
        posts: postReducer,
        categories:categoriesReducer,
    }
})