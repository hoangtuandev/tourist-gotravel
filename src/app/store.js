import { configureStore } from '@reduxjs/toolkit';
import couterReducer from '../components/Counter/CounterSlice';
import detailsTourReducer from '../components/DetailsTour/DetailsTourSlice';

export const store = configureStore({
    reducer: {
        couter: couterReducer,
        detailsTour: detailsTourReducer,
    },
});
