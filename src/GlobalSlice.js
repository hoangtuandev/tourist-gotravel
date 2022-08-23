import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    tourBooked: {},
};

export const GlobalSlice = createSlice({
    name: 'global',
    initialState,
    reducers: {
        handleSetTourBooked: (state, action) => {
            state.tourBooked = action.payload;
        },
    },
});

export const { handleSetTourBooked } = GlobalSlice.actions;

export const tourBooked = (state) => state.global.tourBooked;

export default GlobalSlice.reducer;
