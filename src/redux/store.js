import { configureStore } from '@reduxjs/toolkit';
import { authReducer } from './auth/slice';
import storage from 'redux-persist/lib/storage';
import { contactsReducer } from './contacts/contactsSlice';
import { filterReducer } from './filter/filterSlice';
import persistReducer from 'redux-persist/es/persistReducer';
import persistStore from 'redux-persist/es/persistStore';

const persistConfig = {
  key: 'auth',
  storage,
  whitelist: ['access_token'],
};

const persistedAuthReducer = persistReducer(persistConfig, authReducer);

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filter: filterReducer,
    auth: persistedAuthReducer,
  },
  devTools: process.env.NODE_ENV === 'development',
});

export const persistor = persistStore(store);
