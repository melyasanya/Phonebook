import { loginThunk, logoutThunk, profileThunk } from './thunk';

const { createSlice } = require('@reduxjs/toolkit');

const initialState = {
  access_token: '',
  isLoading: false,
  error: '',
  profile: '',
};

const handlePending = (state, action) => {
  state.isLoading = true;
};
const handleFulfilled = (state, action) => {
  state.isLoading = false;
  state.error = '';
  state.access_token = action.payload.token;
};
const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const handleFulfilledProfile = (state, action) => {
  state.isLoading = false;
  state.error = '';
  state.profile = action.payload;
};

const handleFulfilledLogout = (state, action) => {
  state.isLoading = false;
  state.error = '';
  state.access_token = '';
};
const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(loginThunk.pending, handlePending)
      .addCase(loginThunk.fulfilled, handleFulfilled)
      .addCase(loginThunk.rejected, handleRejected)
      .addCase(profileThunk.pending, handlePending)
      .addCase(profileThunk.fulfilled, handleFulfilledProfile)
      .addCase(profileThunk.rejected, handleRejected)
      .addCase(logoutThunk.pending, handlePending)
      .addCase(logoutThunk.fulfilled, handleFulfilledLogout)
      .addCase(logoutThunk.rejected, handleRejected);
  },
});

export const authReducer = authSlice.reducer;
