import { createAsyncThunk } from '@reduxjs/toolkit';
import { addNewContactApi, removeContactApi } from 'fetch/ContactsApi';
import { getContactsApi } from 'fetch/ContactsApi';
import { LogInApi, LogOutApi, SignUpApi } from 'fetch/UserApi';
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

export const LogInThunk = createAsyncThunk(
  'user/logIn',
  async (body, { rejectWithValue }) => {
    try {
      return await LogInApi(body);
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const SignUpThunk = createAsyncThunk(
  'user/signUp',
  async (newUser, { rejectWithValue }) => {
    try {
      return await SignUpApi(newUser);
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);
export const LogOutThunk = createAsyncThunk(
  'user/logOut',
  async (token, { rejectWithValue }) => {
    try {
      return await LogOutApi(token);
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);