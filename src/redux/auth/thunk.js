import { createAsyncThunk } from '@reduxjs/toolkit';
import { login, logout, profile } from 'services/auth';

export const loginThunk = createAsyncThunk('login', async body => {
  return await login(body);
});

export const profileThunk = createAsyncThunk('current', async () => {
  return await profile();
});

export const logoutThunk = createAsyncThunk('logout', async () => {
  return await logout();
});
