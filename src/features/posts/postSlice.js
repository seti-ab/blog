import { createAsyncThunk, createSlice, createSelector, createEntityAdapter, current } from "@reduxjs/toolkit";
import axios from "axios";


const POSTS_URL = "http://localhost:8000/posts";

const postsAdapter = createEntityAdapter({
    sortComparer: (a, b) => b.date.localeCompare(a.date),
})

const initialState = postsAdapter.getInitialState({
    status: 'idle',
    error: null
});

export const fetchPosts = createAsyncThunk("posts/fetchPosts", async () => {
    try {
        const response = await axios.get(POSTS_URL);
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
        toggleReaction(state, action) {
            const { postId, reaction } = action.payload;
            const currentPost = state.entities[postId];
            if (currentPost) {
                Object.keys(currentPost.reactions).forEach(reaction => currentPost.reactions[reaction] = false)
                currentPost.reactions[reaction] = !currentPost.reactions[reaction];
            }
        },
    }, extraReducers(builder) {
        builder
            .addCase(fetchPosts.pending, (state, action) => {
                state.status = "loading"
            })
            .addCase(fetchPosts.fulfilled, (state, action) => {
                state.status = "succeeded";
                let loadedPosts = [];
                if (action.payload !== "Network Error") {
                    loadedPosts = action.payload.map(post => {
                        post.date = new Date(post.date).toISOString();
                        post.reactions = {
                            thumbsUp: false,
                            thumbsDown: false,
                            heart: false,

                        };
                        return post;
                    });
                } else {
                    state.status = action.payload;
                }
                //Add any fetched posts to the array
                postsAdapter.upsertMany(state, loadedPosts);
            })
            .addCase(fetchPosts.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.error.message;

            })
            .addCase(addNewPost.fulfilled, (state, action) => {
                action.payload.id = state.ids[state.ids.length - 1] + 1

                action.payload.categoryId = action.payload.categoryId;
                action.payload.date = new Date();
                action.payload.reactions = {
                    thumbsUp: false,
                    heart: false,
                    thumbsDown: false,
                }
                console.log(action.payload);
                postsAdapter.addOne(state, action.payload)
            })
            .addCase(updatePost.fulfilled, (state, action) => {
                if (!action.payload?.id) {
                    console.log("Update failed !");
                    console.log(action.payload);
                    return;
                }
                action.payload.date = new Date().toISOString();
                postsAdapter.upsertOne(state, action.payload);

            })
            .addCase(deletePost.fulfilled, (state, action) => {
                if (!action.payload?.id) {
                    console.log("Delete failed !");
                    console.log(action.payload);
                    return;
                }
                action.payload.date = new Date().toISOString();
                postsAdapter.removeOne(state, action.payload.id);
            })

    }
}

);
export const {
    selectAll: selectAllPosts,
    selectById: selectPostById,
    selectIds: selectPostIds } = postsAdapter.getSelectors(state => state.posts)

export const getPostsStatus = (state) => state.posts.status;
export const getPostsError = (state) => state.posts.error;

export const selectPostsByCategory = createSelector(
    [selectAllPosts, (state, categoryId) => categoryId],
    (posts, categoryId) => posts.filter(post => post.categoryId === categoryId)
)

export const { toggleReaction } = postSlice.actions;

export default postSlice.reducer;
