import { configureStore } from '@reduxjs/toolkit';
import couterReducer from '../components/Counter/CounterSlice';
import detailsTourReducer from '../components/DetailsTour/DetailsTourSlice';
import globalReducer from '../GlobalSlice';
import historyBookingReducer from '../components/HistoryBooking/HistoryBookingSlice';

export const store = configureStore({
    reducer: {
        couter: couterReducer,
        detailsTour: detailsTourReducer,
        global: globalReducer,
        historyBooking: historyBookingReducer,
    },
});
