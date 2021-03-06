import { createReducer, combineReducers } from '@reduxjs/toolkit';
import {
    findContact,
    getContactsSuccess,
    getContactsRequest,
    getContactsError,
    addContactRequest,
    addContactSuccess,
    addContactError,
    deleteContactRequest,
    deleteContactSuccess,
    deleteContactError,
} from './phonebook-actions';

const items = createReducer([], {
    [getContactsSuccess]: (_, { payload }) => payload,
    [addContactSuccess]: (state, { payload }) => [...state, payload],
    [deleteContactSuccess]: (state, { payload }) => [
        ...state.filter(({ id }) => id !== payload),
    ],
});

const filter = createReducer('', {
    [findContact]: (_, { payload }) => payload,
});

const isLoading = createReducer(false, {
    [getContactsRequest]: () => true,
    [getContactsSuccess]: () => false,
    [getContactsError]: () => false,
    [addContactRequest]: () => true,
    [addContactSuccess]: () => false,
    [addContactError]: () => false,
    [deleteContactRequest]: () => true,
    [deleteContactSuccess]: () => false,
    [deleteContactError]: () => false,
});

const onError = createReducer('', {
    [getContactsError]: () => 'Something went wrong, try again later',
    [getContactsRequest]: () => '',
    [addContactError]: () => 'Something went wrong, try again later',
    [addContactRequest]: () => '',
    [deleteContactError]: () => 'Something went wrong, try again later',
    [deleteContactRequest]: () => '',
});

export default combineReducers({
    items,
    filter,
    isLoading,
    onError,
});
