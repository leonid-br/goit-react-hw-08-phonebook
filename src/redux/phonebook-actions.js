import { createAction, createAsyncThunk } from '@reduxjs/toolkit';
import { getAllContacts, addNewContact, deleteContact } from 'service/api';

// export const addContact = createAction(
//     'phonebook/AddContact',
//     (name, number) => ({
//         payload: {
//             id: shortid.generate(),
//             name,
//             number,
//         },
//     }),
// );

// export const deleteContact = createAction('phonebook/DeleteContact');

export const findContact = createAction('phonebook/FindContact');

export const getContacts = createAsyncThunk(
    'phonebook/getContacts',
    async () => {
        const contact = await getAllContacts();
        return contact;
    },
);

export const addContact = createAsyncThunk(
    'phonebook/addContact',
    async contact => await addNewContact(contact),
);

export const deleteContactById = createAsyncThunk(
    'phonebook/DeleteContact',
    async id => {
        const res = await deleteContact(id);
        return res;
    },
);
