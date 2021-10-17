import { configureStore } from '@reduxjs/toolkit';
import contactReducer from './phonebook-reducer';

const store = configureStore({
    reducer: {
        contacts: contactReducer,
    },
    devTools: process.env.NODE_ENV === 'development',
});

export default store;
