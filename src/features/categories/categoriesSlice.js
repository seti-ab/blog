import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const CATEGORIES_URL = "http://localhost:8000/categories";
const initialState = []

export const fetchCategories = createAsyncThunk("categories/fetchCategories", async () => {
    const staticData = await import('../../db.json');
    try {
        const response = await axios.get(CATEGORIES_URL);
        return [...response.data]
    }
    catch (err) {
        return staticData.categories;
    }
})
const categorySlice = createSlice({
    name: "categories",
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder
            .addCase(fetchCategories.fulfilled, (state, action) => {
                return action.payload;
            })
    }
})

export const selectAllCategories = (state) => state.categories;
export const selectCategoryById = (state, categoryId) => state.categories.find(category => category.id === categoryId);

export default categorySlice.reducer;