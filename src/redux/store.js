import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import contactsReducers from './contacts/contacts-reducers';

const contactPersistConfig = {
  key: 'contact',
  storage,
  blacklist: ['filter'],
};

export const store = configureStore({
  reducer: {
    contacts: persistReducer(contactPersistConfig, contactsReducers),
  },

  middleware: [
    ...getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
    logger,
  ],
  devTools: process.env.NODE_ENV === 'development',
});

export const persistor = persistStore(store);
