import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { sub } from "date-fns";

const initialState = {
    posts: [],
    status: 'idle',
    error: null
};

const POSTS_URL = "https://jsonplaceholder.typicode.com/posts";

export const fetchPosts = createAsyncThunk("posts/fetchPosts", async () => {
    try {
        const response = await axios.get(POSTS_URL)
        return [...response.data];
    } catch (err) {
        return err.message;
    }
})

export const addNewPost = createAsyncThunk("posts/addNewPost", async (initialPost) => {
    try {
        const response = await axios.post(POSTS_URL, initialPost);
        return response.data;
    } catch (err) {
        return err.message;
    }
})

export const updatePost = createAsyncThunk("posts/updatePost", async (initialPost) => {
    const { id } = initialPost;
    try {
        const response = await axios.put(`${POSTS_URL}/${id}`, initialPost);
        return response.data;
    } catch (err) {
        return err.message;
    }
})

export const deletePost = createAsyncThunk("posts/deletePost", async (initialPost) => {
    const { id } = initialPost;
    try {
        const response = await axios.delete(`${POSTS_URL}/${id}`, initialPost);
        //fake api doesn't return post id after deleting
        if (response?.status === 200) {
            return initialPost;
        }
        return `${response?.status}:${response.statusText}`;
    } catch (err) {
        return err.message;
    }
})


const postSlice = createSlice({
    name: "posts",
    initialState,
    reducers: {
        addReaction(state, action) {
            const { postId, reaction } = action.payload;
            const currentPost = state.posts.find((post) => post.id === postId);
            currentPost && currentPost.reactions[reaction]++;
        },
    }, extraReducers(builder) {
        builder
            .addCase(fetchPosts.pending, (state, action) => {
                state.status = "loading"
            })
            .addCase(fetchPosts.fulfilled, (state, action) => {
                state.status = "succeeded";
                let min = "1";
                const loadedPosts = action.payload.map(post => {
                    post.date = sub(new Date(), { minutes: min++ }).toISOString();
                    post.reactions = {
                        thumbsUp: 0,
                        wow: 0,
                        heart: 0,
                        rocket: 0,
                        coffee: 0

                    };
                    return post;
                });
                //Add any fetched posts to the array
                state.posts = state.posts.concat(loadedPosts)
            })
            .addCase(fetchPosts.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.error.message;
            })
            .addCase(addNewPost.fulfilled, (state, action) => {
                action.payload.date = new Date().toISOString();
                action.payload.reactions = {
                    thumbsUp: 0,
                    wow: 0,
                    heart: 0,
                    rocket: 0,
                    coffee: 0
                }
                state.posts.push(action.payload);
            })
            .addCase(updatePost.fulfilled, (state, action) => {
                if (!action.payload?.id) {
                    console.log("Update failed !");
                    console.log(action.payload);
                    return;
                }
                action.payload.date = new Date().toISOString();
                const { id } = action.payload;
                const posts = state.posts.filter(post => post.id !== id);
                state.posts = [...posts, action.payload];

            })
            .addCase(deletePost.fulfilled,(state,action)=>{
                if (!action.payload?.id) {
                    console.log("Delete failed !");
                    console.log(action.payload);
                    return;
                }
                action.payload.date = new Date().toISOString();
                const { id } = action.payload;
                const posts = state.posts.filter(post => post.id !== id);
                state.posts = posts;
            })

    }
}

);
export const selectAllPosts = (state) => state.posts.posts;
export const getPostsStatus = (state) => state.posts.status;
export const getPostsError = (state) => state.posts.error;

export const selectPostById = (state, postId) => state.posts.posts.find(post => post.id === postId)

export const { addReaction } = postSlice.actions;

export default postSlice.reducer;
