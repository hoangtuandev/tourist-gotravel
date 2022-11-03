import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    openAddPosts: false,
    openViewPosts: false,
    userLogined: null,
    postsSelected: null,
};

export const SharePostsSlice = createSlice({
    name: 'sharePosts',
    initialState,
    reducers: {
        handleToggleAddSharePosts: (state, action) => {
            state.openAddPosts = action.payload;
        },
        handleToggleViewSharePosts: (state, action) => {
            state.openViewPosts = action.payload;
        },
        handleSetUserLogined: (state, action) => {
            state.userLogined = action.payload;
        },
        handleSelectPosts: (state, action) => {
            state.postsSelected = action.payload;
        },
    },
});

export const {
    handleToggleAddSharePosts,
    handleSetUserLogined,
    handleSelectPosts,
    handleToggleViewSharePosts,
} = SharePostsSlice.actions;

export const openAddPosts = (state) => state.sharePosts.openAddPosts;
export const openViewPosts = (state) => state.sharePosts.openViewPosts;
export const userLogined = (state) => state.sharePosts.userLogined;
export const postsSelected = (state) => state.sharePosts.postsSelected;

export default SharePostsSlice.reducer;
