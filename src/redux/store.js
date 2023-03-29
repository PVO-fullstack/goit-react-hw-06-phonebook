import { configureStore } from '@reduxjs/toolkit'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { contactsSlice } from "./contactsSlice";
import { filterSlice } from './filterSlice';

const persistConfig = {
  key: 'root',
  storage,
}

const persistedContactsReducer = persistReducer(persistConfig, contactsSlice.reducer)

export const store = configureStore({
  reducer: {
    contacts: persistedContactsReducer,
    filter: filterSlice.reducer,
  },
})

export const persistor = persistStore(store);