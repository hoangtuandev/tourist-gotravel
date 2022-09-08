import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    openViewBooking: false,
    openRatingTour: false,
    bookingSelected: {},
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
        handleSetBookingSelected: (state, action) => {
            state.bookingSelected = action.payload;
        },
    },
});

export const {
    handleToggleViewHistoryBooking,
    handleSetBookingSelected,
    handleToggleRatingTour,
} = HistoryBookingSlice.actions;

export const openViewBooking = (state) => state.historyBooking.openViewBooking;
export const bookingSelected = (state) => state.historyBooking.bookingSelected;
export const openRatingTour = (state) => state.historyBooking.openRatingTour;

export default HistoryBookingSlice.reducer;
