import { createAsyncThunk } from '@reduxjs/toolkit';

import { fetchContacts, addContact, deleteContact } from 'services/contacts';

export const fetchAllContacts = createAsyncThunk(
  'contacts/fetch-all',
  async (_, thunkAPI) => {
    try {
      const data = await fetchContacts();
      return data;
    } catch ({ response }) {
      return thunkAPI.rejectWithValue(response.data.message);
    }
  }
);

export const fetchAddContact = createAsyncThunk(
  'contacts/add',
  async (data, { rejectWithValue }) => {
    try {
      const result = await addContact(data);
      return result;
    } catch ({ response }) {
      return rejectWithValue(response.data.message);
    }
  },
  {
    condition: ({ name, number }, { getState }) => {
      const { contacts } = getState();
      const normalizedName = name.toLowerCase();
      const normalizedNumber = number.toLowerCase();

      const contactData = contacts.items.find(({ name, number }) => {
        return (
          name.toLowerCase() === normalizedName ||
          number.toLowerCase() === normalizedNumber
        );
      });
      if (contactData) {
        alert(`Name ${name} or number ${number} is already in contacts`);
        return false;
      }
    },
  }
);

export const fetchDeleteContacts = createAsyncThunk(
  'contacts/delete',
  async (id, { rejectWithValue }) => {
    try {
      await deleteContact(id);
      return id;
    } catch ({ response }) {
      return rejectWithValue(response.data.message);
    }
  }
);
