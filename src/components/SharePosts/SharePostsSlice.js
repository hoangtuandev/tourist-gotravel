import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    openAddPosts: false,
    userLogined: null,
};

export const SharePostsSlice = createSlice({
    name: 'sharePosts',
    initialState,
    reducers: {
        handleToggleAddSharePosts: (state, action) => {
            state.openAddPosts = action.payload;
        },
        handleSetUserLogined: (state, action) => {
            state.userLogined = action.payload;
        },
    },
});

export const { handleToggleAddSharePosts, handleSetUserLogined } =
    SharePostsSlice.actions;

export const openAddPosts = (state) => state.sharePosts.openAddPosts;
export const userLogined = (state) => state.sharePosts.userLogined;

export default SharePostsSlice.reducer;
