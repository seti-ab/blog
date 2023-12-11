import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const USERS_URL = "http://localhost:8000/users";
const initialState = []

export const fetchUsers = createAsyncThunk("users/fetchUsers", async () => {
    try {
        const response = await axios.get(USERS_URL);
        return [...response.data]
    }
    catch (err) {
        return err.message;
    }
})
const userSlice = createSlice({
    name: "users",
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder
            .addCase(fetchUsers.fulfilled, (state, action) => {
                return action.payload;
            })
    }
})

export const selectAllusers = (state) => state.users;
export const selectUserById = (state, userId) => state.users.find(user => user.id === userId);

export default userSlice.reducer;