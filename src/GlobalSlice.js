import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    tourBooked: {},
    openBackdrop: false,
    tabMenuCurrentTour: {},
    priceTourFilter: [0, 5000000],
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
        handleSetTabMenuCurrentTour: (state, action) => {
            state.tabMenuCurrentTour = action.payload;
        },
        handleChangePriceTourFilter: (state, action) => {
            state.priceTourFilter = action.payload;
        },
    },
});

export const {
    handleSetTourBooked,
    handleOpenBackdrop,
    handleCloseBackdrop,
    handleSetTabMenuCurrentTour,
    handleChangePriceTourFilter,
} = GlobalSlice.actions;

export const tourBooked = (state) => state.global.tourBooked;
export const openBackdrop = (state) => state.global.openBackdrop;
export const tabMenuCurrentTour = (state) => state.global.tabMenuCurrentTour;
export const priceTourFilter = (state) => state.global.priceTourFilter;

export default GlobalSlice.reducer;
