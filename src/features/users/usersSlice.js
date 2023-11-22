import { createSlice } from "@reduxjs/toolkit";
const initialState = [
    { id: "1", name: "Setayesh Abouei" },
    { id: "2", name: "John Doe" },
    { id: "3", name: "jane Doe" },
]

const userSlice = createSlice({
    name: "users",
    initialState,
    reducers: {}
})
export const selectAllusers = (state)=>state.users;
export default userSlice.reducer;