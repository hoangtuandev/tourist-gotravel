import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    isOpenDetailsTour: true,
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
    },
});

export const { handleOpenDetailsTour, handleCloseDetailsTour } =
    DetailsTourSlice.actions;

export const isOpenDetailsTour = (state) => state.detailsTour.isOpenDetailsTour;

export default DetailsTourSlice.reducer;
