import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    isOpenDetailsTour: false,
    tourSelected: {},
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
    },
});

export const {
    handleOpenDetailsTour,
    handleCloseDetailsTour,
    handleSelectTour,
} = DetailsTourSlice.actions;

export const isOpenDetailsTour = (state) => state.detailsTour.isOpenDetailsTour;
export const tourSelected = (state) => state.detailsTour.tourSelected;

export default DetailsTourSlice.reducer;
