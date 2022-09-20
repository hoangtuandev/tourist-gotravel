import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    viewAdvertisement: false,
    advertisementSelected: {},
};

export const AdvertisementSlice = createSlice({
    name: 'advertisement',
    initialState,
    reducers: {
        handleSelectAdvertisement: (state, action) => {
            state.advertisementSelected = action.payload;
        },
        handleToggleViewAdvertisement: (state, action) => {
            state.viewAdvertisement = action.payload;
        },
    },
});

export const { handleSelectAdvertisement, handleToggleViewAdvertisement } =
    AdvertisementSlice.actions;

export const viewAdvertisement = (state) =>
    state.advertisement.viewAdvertisement;

export const advertisementSelected = (state) =>
    state.advertisement.advertisementSelected;

export default AdvertisementSlice.reducer;
