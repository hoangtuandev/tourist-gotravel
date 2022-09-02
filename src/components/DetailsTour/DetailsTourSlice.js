import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    isOpenDetailsTour: false,
    tourSelected: {},
    departureSelected: {},
};

export const DetailsTourSlice = createSlice({
    name: 'detailsTour',
    initialState,
    reducers: {
        handleOpenDetailsTour: (state) => {
            state.isOpenDetailsTour = true;
        },
        handleCloseDetailsTour: (state) => {
            state.isOpenDetailsTour = false;
        },
        handleSelectTour: (state, action) => {
            state.tourSelected = action.payload;
        },
        handleSetDeparture: (state, action) => {
            state.departureSelected = action.payload;
        },
    },
});

export const {
    handleOpenDetailsTour,
    handleCloseDetailsTour,
    handleSelectTour,
    handleSetDeparture,
} = DetailsTourSlice.actions;

export const isOpenDetailsTour = (state) => state.detailsTour.isOpenDetailsTour;
export const tourSelected = (state) => state.detailsTour.tourSelected;
export const departureSelected = (state) => state.detailsTour.departureSelected;

export default DetailsTourSlice.reducer;
