import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    openViewBooking: false,
    openRatingTour: false,
    openAddRatingTour: false,
    openUpdateRatingtour: false,
    openAddRatingGuide: false,
    openUpdateRatingGuide: false,
    ratingGuideList: [],
    bookingSelected: {},
    isLoading: false,
};

export const HistoryBookingSlice = createSlice({
    name: 'historyBooking',
    initialState,
    reducers: {
        handleToggleViewHistoryBooking: (state, action) => {
            state.openViewBooking = action.payload;
        },
        handleToggleRatingTour: (state, action) => {
            state.openRatingTour = action.payload;
        },
        handleToggleAddRatingTour: (state, action) => {
            state.openAddRatingTour = action.payload;
        },
        handleToggleUpdateRatingTour: (state, action) => {
            state.openUpdateRatingtour = action.payload;
        },
        handleToggleAddRatingGuide: (state, action) => {
            state.openAddRatingGuide = action.payload;
        },
        handleToggleUpdateRatingGuide: (state, action) => {
            state.openUpdateRatingGuide = action.payload;
        },
        handleSetBookingSelected: (state, action) => {
            state.bookingSelected = action.payload;
        },
        handleToggleLoading: (state, action) => {
            state.isLoading = action.payload;
        },
        handleChangeRatingGuideList: (state, action) => {
            state.ratingGuideList = action.payload;
        },
    },
});

export const {
    handleToggleViewHistoryBooking,
    handleSetBookingSelected,
    handleToggleRatingTour,
    handleToggleLoading,
    handleToggleAddRatingTour,
    handleToggleUpdateRatingTour,
    handleToggleAddRatingGuide,
    handleToggleUpdateRatingGuide,
    handleChangeRatingGuideList,
} = HistoryBookingSlice.actions;

export const openViewBooking = (state) => state.historyBooking.openViewBooking;
export const bookingSelected = (state) => state.historyBooking.bookingSelected;
export const openRatingTour = (state) => state.historyBooking.openRatingTour;
export const openAddRatingTour = (state) =>
    state.historyBooking.openAddRatingTour;
export const openUpdateRatingtour = (state) =>
    state.historyBooking.openUpdateRatingtour;
export const openAddRatingGuide = (state) =>
    state.historyBooking.openAddRatingGuide;
export const openUpdateRatingGuide = (state) =>
    state.historyBooking.openUpdateRatingGuide;
export const isLoading = (state) => state.historyBooking.isLoading;
export const ratingGuideList = (state) => state.historyBooking.ratingGuideList;

export default HistoryBookingSlice.reducer;
