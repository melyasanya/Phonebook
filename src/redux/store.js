import { configureStore } from '@reduxjs/toolkit';
import { authReducer } from './auth/slice';

import { contactsReducer } from './contacts/contactsSlice';
import { filterReducer } from './filter/filterSlice';

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filter: filterReducer,
    auth: authReducer,
  },
  devTools: process.env.NODE_ENV === 'development',
});
