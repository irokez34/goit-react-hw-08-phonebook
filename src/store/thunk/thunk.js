import { createAsyncThunk } from '@reduxjs/toolkit';
import { addNewContactApi, removeContactApi } from 'fetch/ContactsApi';
import { getContactsApi } from 'fetch/ContactsApi';
export const addNewContactThunk = createAsyncThunk(
  'contacts/addNewContacts',
  async (body, { rejectWithValue }) => {
    try {
      return await addNewContactApi(body);
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const getContactsThunk = createAsyncThunk(
  'contacts/getContacts',
  async (_, { rejectWithValue }) => {
    try {
      return await getContactsApi();
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const deleteContactThunk = createAsyncThunk(
  'contacts/deleteContacts',
  async (id, { rejectWithValue }) => {
    try {
      return await removeContactApi(id);
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
