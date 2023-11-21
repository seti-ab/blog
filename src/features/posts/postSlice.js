import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    { id: "1", title: "Learning Redux Toolkit", content: "something about learning redux toolkit bluh bluh" },
    { id: "2", title: "slices", content: "The more i say slice, the more i want pizzaّ" }
]
const postSlice=createSlice({
    name:"posts",
    initialState,
    reducers:{

    }
})
export const selectAllPosts=(state)=>state.posts;


export default postSlice.reducer;