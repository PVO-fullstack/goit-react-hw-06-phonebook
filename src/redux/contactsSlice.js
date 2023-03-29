import { createSlice } from "@reduxjs/toolkit";

const initialState = { contacts: [] };

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    removeContact: (state, action) => {
      // const index = state.contacts.findIndex((item) => action.payload === item.id);
      // state.contacts.splice(index, 1);
      state.contacts = state.contacts.filter(item => action.payload !== item.id);
    },
    addContact: (state, action) => {
      state.contacts.push(action.payload);
    },
  }
})

export const { addContact, removeContact, filterUpdate } = contactsSlice.actions

export default contactsSlice.reducer