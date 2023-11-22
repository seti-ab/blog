import { createSlice, nanoid } from "@reduxjs/toolkit";
import { sub } from "date-fns";

const initialState = [
    {
        id: "1",
        title: "Learning Redux Toolkit",
        content: "something about learning redux toolkit bluh bluh",
        date: sub(new Date(), { minutes: 10 }).toISOString(),
    },
    {
        id: "2",
        title: "slices",
        content: "The more i say slice, the more i want pizza",
        date: sub(new Date(), { minutes: 5 }).toISOString(),
    }
]
const postSlice = createSlice({
    name: "posts",
    initialState,
    reducers: {
        addNewPost: {
            reducer(state, action) {
                state.push(action.payload)
            },
            prepare({ ...formData }) {
                return {
                    payload: {
                        ...formData,
                        id: nanoid(),
                        date: new Date().toISOString(),
                    }
                }

            }
        }
    }
})
export const selectAllPosts = (state) => state.posts;

export const { addNewPost } = postSlice.actions;

export default postSlice.reducer;