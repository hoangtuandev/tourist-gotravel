import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    tourBooked: {},
    departureBooked: {},
    openBackdrop: false,
    keySearching: '',
    resultSearchingTour: [],
    maxPriceTours: 20000000,
    paramsTourFilter: {
        price: [0, 10000000],
        departure: new Date().getTime(),
        time: 1,
        allPrice: true,
        allDeparture: true,
        allTime: true,
    },

    tabMenuCurrentTour: {},
    successPayment: false,
    openChatBot: false,
    openResultSearchingChatBot: false,
    resultSearchingChatBotList: [],
    baseURLServer: 'http://localhost:5000/static/',
};

export const GlobalSlice = createSlice({
    name: 'global',
    initialState,
    reducers: {
        handleSetTourBooked: (state, action) => {
            state.tourBooked = action.payload;
        },
        handleSetDepartureBooked: (state, action) => {
            state.departureBooked = action.payload;
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

        handleChangeParamsFilter: (state, action) => {
            state.paramsTourFilter.price = action.payload.price;
            state.paramsTourFilter.departure = action.payload.departure;
            state.paramsTourFilter.time = action.payload.time;
            state.paramsTourFilter.allPrice = action.payload.allPrice;
            state.paramsTourFilter.allDeparture = action.payload.allDeparture;
            state.paramsTourFilter.allTime = action.payload.allTime;
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
        handleSuccessPaymentTour: (state, action) => {
            state.successPayment = action.payload;
        },
        handleSetBaseURL: (state, action) => {
            state.baseURLServer = action.payload;
        },
        handleToggleResultSearchingChatBot: (state, action) => {
            state.openResultSearchingChatBot = action.payload;
        },
        setResultSearchingChatBot: (state, action) => {
            state.resultSearchingChatBotList = action.payload;
        },
        handleToggleChatBot: (state, action) => {
            state.openChatBot = action.payload;
        },
    },
});

export const {
    handleSetTourBooked,
    handleSetDepartureBooked,
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
    handleSuccessPaymentTour,
    handleSetBaseURL,
    handleToggleChatBot,
    setResultSearchingChatBot,
    handleToggleResultSearchingChatBot,
} = GlobalSlice.actions;

export const tourBooked = (state) => state.global.tourBooked;
export const departureBooked = (state) => state.global.departureBooked;
export const openBackdrop = (state) => state.global.openBackdrop;
export const tabMenuCurrentTour = (state) => state.global.tabMenuCurrentTour;
export const paramsTourFilter = (state) => state.global.paramsTourFilter;
export const maxPriceTours = (state) => state.global.maxPriceTours;
export const checkedAllPrice = (state) => state.global.checkedAllPrice;
export const checkedAllDeparture = (state) => state.global.checkedAllDeparture;
export const checkedAllTime = (state) => state.global.checkedAllTime;
export const keySearching = (state) => state.global.keySearching;
export const resultSearchingTour = (state) => state.global.resultSearchingTour;
export const successPayment = (state) => state.global.successPayment;
export const openChatBot = (state) => state.global.openChatBot;
export const openResultSearchingChatBot = (state) =>
    state.global.openResultSearchingChatBot;
export const resultSearchingChatBotList = (state) =>
    state.global.resultSearchingChatBotList;
export const baseURLServer = (state) => state.global.baseURLServer;

export default GlobalSlice.reducer;
