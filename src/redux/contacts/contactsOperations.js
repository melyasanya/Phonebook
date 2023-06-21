import { createAsyncThunk } from '@reduxjs/toolkit';
import { add, delContact, fetch, setToken } from 'services/auth';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkApi) => {
    const token = thunkApi.getState().auth.access_token;
    setToken(token);
    return await fetch();
  }
);

export const addContact = createAsyncThunk('contacts', async body => {
  return await add(body);
});

export const deleteContact = createAsyncThunk('contacts/delete', async id => {
  return await delContact(id);
});
