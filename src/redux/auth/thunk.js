import { createAsyncThunk } from '@reduxjs/toolkit';
import { login, logout, profile, setToken } from 'services/auth';

export const loginThunk = createAsyncThunk('login', async body => {
  return await login(body);
});

export const profileThunk = createAsyncThunk('current', async (_, thunkApi) => {
  const token = thunkApi.getState().auth.access_token;
  setToken(token);
  return await profile();
});

export const logoutThunk = createAsyncThunk('logout', async () => {
  return await logout();
});
