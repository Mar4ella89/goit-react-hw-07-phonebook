import { createSlice } from '@reduxjs/toolkit';
// import { nanoid } from 'nanoid';

import * as actions from './contact-actions';

const initialState = {
  items: [],
  loading: false,
  error: null,
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  extraReducers: {
    [actions.fetchAllContactsLoading]: store => {
      store.loading = true;
    },
    [actions.fetchAllContactsSuccess]: (store, { payload }) => {
      store.loading = false;
      store.items = payload;
    },
    [actions.fetchAllContactsError]: (store, { payload }) => {
      store.loading = false;
      store.error = payload;
    },
    [actions.fetchAddContactLoading]: store => {
      store.loading = true;
    },
    [actions.fetchAddContactSuccess]: (store, { payload }) => {
      store.loading = false;
      store.items.push(payload);
    },
    [actions.fetchAddContactError]: (store, { payload }) => {
      store.loading = false;
      store.error = payload;
    },
    [actions.fetchDeleteContactLoading]: store => {
      store.loading = true;
    },
    [actions.fetchDeleteContactSuccess]: (store, { payload }) => {
      store.loading = false;
      const index = store.items.findIndex(item => item.id === payload);
      store.items.splice(index, 1);
    },
    [actions.fetchDeleteContactError]: (store, { payload }) => {
      store.loading = false;
      store.error = payload;
    },
    // addContact: {
    //   reducer: (state, { payload }) => {
    //     state.push(payload);
    //   },
    //   prepare: ({ name, number }) => {
    //     return {
    //       payload: {
    //         id: nanoid(),
    //         name,
    //         number,
    //       },
    //     };
    //   },
    // },
    // deleteContact: (state, { payload }) =>
    //   state.filter(item => item.id !== payload),
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;
export default contactsSlice.reducer;
