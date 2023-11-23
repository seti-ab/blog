import { createSlice, nanoid } from "@reduxjs/toolkit";
import { sub } from "date-fns";

const initialState = [
  {
    id: "1",
    title: "Learning Redux Toolkit",
    content: "something about learning redux toolkit bluh bluh",
    date: sub(new Date(), { minutes: 10 }).toISOString(),
    reactions: {
      thumbsUp: 0,
      wow: 0,
      heart: 0,
      rocket: 0,
      coffee: 0,
    },
  },
  {
    id: "2",
    title: "slices",
    content: "The more i say slice, the more i want pizza",
    date: sub(new Date(), { minutes: 5 }).toISOString(),
    reactions: {
      thumbsUp: 0,
      wow: 0,
      heart: 0,
      rocket: 0,
      coffee: 0,
    },
  },
];
const postSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    addNewPost: {
      reducer(state, action) {
        state.push(action.payload);
      },
      prepare({ ...formData }) {
        return {
          payload: {
            ...formData,
            id: nanoid(),
            date: new Date().toISOString(),
            reactions: {
              thumbsUp: 0,
              wow: 0,
              heart: 0,
              rocket: 0,
              coffee: 0,
            },
          },
        };
      },
    },
    addReaction(state, action) {
      const { postId, reaction } = action.payload;
      const currentPost = state.find((post) => post.id === postId);
      currentPost && currentPost.reactions[reaction]++;
    },
  },
});
export const selectAllPosts = (state) => state.posts;

export const { addNewPost, addReaction } = postSlice.actions;

export default postSlice.reducer;
