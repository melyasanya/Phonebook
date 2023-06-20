import { createAsyncThunk } from '@reduxjs/toolkit';
import { add, delContact, fetch } from 'services/auth';

export const fetchContacts = createAsyncThunk('contacts/fetchAll', async () => {
  return await fetch();
});

export const addContact = createAsyncThunk('contacts', async body => {
  return await add(body);
});

export const deleteContact = createAsyncThunk('contacts/delete', async id => {
  return await delContact(id);
});
