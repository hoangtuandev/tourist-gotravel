import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    tourBooked: {},
    openBackdrop: false,
};

export const GlobalSlice = createSlice({
    name: 'global',
    initialState,
    reducers: {
        handleSetTourBooked: (state, action) => {
            state.tourBooked = action.payload;
        },
        handleOpenBackdrop: (state, action) => {
            state.openBackdrop = true;
        },
        handleCloseBackdrop: (state, action) => {
            state.openBackdrop = false;
        },
    },
});

export const { handleSetTourBooked, handleOpenBackdrop, handleCloseBackdrop } =
    GlobalSlice.actions;

export const tourBooked = (state) => state.global.tourBooked;
export const openBackdrop = (state) => state.global.openBackdrop;

export default GlobalSlice.reducer;
