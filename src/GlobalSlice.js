import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    tourBooked: {},
    openBackdrop: false,
    keySearching: '',
    resultSearchingTour: [],
    maxPriceTours: 20000000,
    paramsTourFilter: {
        price: [0, 10000000],
        departure: new Date().getTime(),
        time: 1,
    },
    checkedAllPrice: true,
    checkedAllDeparture: true,
    checkedAllTime: true,
    tabMenuCurrentTour: {},
    priceTourFilter: [0, 5000000],
    departureTourFilter: new Date().getTime(),
    timeTourFilter: 2,
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
            state.paramsTourFilter = initialState.paramsTourFilter;
            state.tabMenuCurrentTour = action.payload;
        },
        handleChangePriceTourFilter: (state, action) => {
            state.priceTourFilter = action.payload;
        },
        handleChangeDepartureTourFilter: (state, action) => {
            state.departureTourFilter = action.payload;
        },
        handleChangeTimeTourFilter: (state, action) => {
            state.timeTourFilter = action.payload;
        },
        handleChangeParamsFilter: (state, action) => {
            state.paramsTourFilter.price = action.payload.price;
            state.paramsTourFilter.departure = action.payload.departure;
            state.paramsTourFilter.time = action.payload.time;
            // state.paramsTourFilter.checkedAllPrice = false;
        },
        handleChangeCheckboxAllPrice: (state, action) => {
            state.checkedAllPrice = action.payload;
        },
        handleChangeCheckboxAllDeparture: (state, action) => {
            state.checkedAllDeparture = action.payload;
        },
        handleChangeCheckboxAllTime: (state, action) => {
            state.checkedAllTime = action.payload;
        },
        handleChangeKeySearching: (state, action) => {
            state.keySearching = action.payload;
        },
        handleSetSearchingTour: (state, action) => {
            state.resultSearchingTour = action.payload;
        },
    },
});

export const {
    handleSetTourBooked,
    handleOpenBackdrop,
    handleCloseBackdrop,
    handleSetTabMenuCurrentTour,
    handleChangePriceTourFilter,
    handleChangeDepartureTourFilter,
    handleChangeTimeTourFilter,
    handleChangeParamsFilter,
    handleChangeCheckboxAllPrice,
    handleChangeCheckboxAllDeparture,
    handleChangeCheckboxAllTime,
    handleChangeKeySearching,
    handleSetSearchingTour,
} = GlobalSlice.actions;

export const tourBooked = (state) => state.global.tourBooked;
export const openBackdrop = (state) => state.global.openBackdrop;
export const tabMenuCurrentTour = (state) => state.global.tabMenuCurrentTour;
export const priceTourFilter = (state) => state.global.priceTourFilter;
export const departureTourFilter = (state) => state.global.departureTourFilter;
export const timeTourFilter = (state) => state.global.timeTourFilter;
export const paramsTourFilter = (state) => state.global.paramsTourFilter;
export const maxPriceTours = (state) => state.global.maxPriceTours;
export const checkedAllPrice = (state) => state.global.checkedAllPrice;
export const checkedAllDeparture = (state) => state.global.checkedAllDeparture;
export const checkedAllTime = (state) => state.global.checkedAllTime;
export const keySearching = (state) => state.global.keySearching;
export const resultSearchingTour = (state) => state.global.resultSearchingTour;

export default GlobalSlice.reducer;
