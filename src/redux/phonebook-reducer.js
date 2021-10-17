import { createReducer, combineReducers } from '@reduxjs/toolkit';
import {
    addContact,
    deleteContactById,
    findContact,
    getContacts,
} from './phonebook-actions';

const items = createReducer([], {
    [getContacts.fulfilled]: (_, { payload }) => [...payload],
    [addContact.fulfilled]: (state, { payload }) => [...state, payload],
    [deleteContactById.fulfilled]: (state, action) => [
        ...state.filter(({ id }) => id !== action.meta.arg),
    ],
});

const filter = createReducer('', {
    [findContact]: (_, { payload }) => payload,
});

const isLoadingGet = createReducer(false, {
    [getContacts.pending]: () => true,
    [getContacts.fulfilled]: () => false,
    [getContacts.rejected]: () => false,
});

const isLoadinAdd = createReducer(false, {
    [addContact.pending]: () => true,
    [addContact.fulfilled]: () => false,
    [addContact.rejected]: () => false,
});

const isLoadingDelete = createReducer(false, {
    [deleteContactById.pending]: () => true,
    [deleteContactById.fulfilled]: () => false,
    [deleteContactById.rejected]: () => false,
});

export default combineReducers({
    items,
    filter,
    isLoadingGet,
    isLoadinAdd,
    isLoadingDelete,
});
