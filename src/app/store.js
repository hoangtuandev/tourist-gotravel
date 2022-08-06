import { configureStore } from '@reduxjs/toolkit';
import couterReducer from '../components/Counter/CounterSlice';

export const store = configureStore({
    reducer: {
        couter: couterReducer,
    },
});
