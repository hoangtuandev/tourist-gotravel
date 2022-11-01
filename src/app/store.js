import { configureStore } from '@reduxjs/toolkit';
import couterReducer from '../components/Counter/CounterSlice';
import detailsTourReducer from '../components/DetailsTour/DetailsTourSlice';
import globalReducer from '../GlobalSlice';
import historyBookingReducer from '../components/HistoryBooking/HistoryBookingSlice';
import advertisementReducer from '../components/Advertisement/AdvertisementSlice';
import sharePostsReducer from '../components/SharePosts/SharePostsSlice';

export const store = configureStore({
    reducer: {
        couter: couterReducer,
        detailsTour: detailsTourReducer,
        global: globalReducer,
        historyBooking: historyBookingReducer,
        advertisement: advertisementReducer,
        sharePosts: sharePostsReducer,
    },
});
