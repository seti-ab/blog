import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice"
import postReducer from "../features/posts/postSlice";
import categoriesReducer from "../features/categories/categoriesSlice";

export const store = configureStore({
    reducer: {
        counter: counterReducer,
        posts: postReducer,
        categories:categoriesReducer,
    }
})