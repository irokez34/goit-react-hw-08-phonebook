import { createAsyncThunk } from '@reduxjs/toolkit';

import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com/';
axios.defaults.headers.accept = '*/*';

const authHeader = token => {
  axios.defaults.headers.Authorization = `Bearer ${token}`;
};
const clearAuthHeader = () => {
  axios.defaults.headers.Authorization = ``;
};
// ------------------------------Contacts-Thunk--------------------------//
export const addNewContactThunk = createAsyncThunk(
  'contacts/addNewContacts',
  async (body, { rejectWithValue }) => {
    try {
      const { data } = await axios.post('/contacts', body);
      console.log('work');
      return data;
    } catch (error) {
      return rejectWithValue(error); //error.message
    }
  }
);

export const getContactsThunk = createAsyncThunk(
  'contacts/getContacts',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.get('/contacts');
      return data;
    } catch (error) {
      return rejectWithValue(error); //error.message
    }
  }
);

export const deleteContactThunk = createAsyncThunk(
  'contacts/deleteContacts',
  async (id, { rejectWithValue }) => {
    try {
      const { data } = await axios.delete(`/contacts/${id}`);
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
// ------------------------------Contacts-Thunk--------------------------//

// ------------------------------User-Thunk--------------------------//
export const LogInThunk = createAsyncThunk(
  'user/logIn',
  async (body, { rejectWithValue }) => {
    try {
      const { data } = await axios.post('/users/login', body);
      authHeader(data.token);
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data); //error.message
    }
  }
);

export const SignUpThunk = createAsyncThunk(
  'user/signUp',
  async (newUser, { rejectWithValue }) => {
    try {
      const { data } = await axios.post('/users/signup', newUser, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      authHeader(data.token);
      return data;
    } catch (error) {
      console.log(error);
      return rejectWithValue(error.response.data); //error.message
    }
  }
);
export const LogOutThunk = createAsyncThunk(
  'user/logOut',
  async (_, { rejectWithValue }) => {
    try {
      const res = await axios.post('/users/logout');
      clearAuthHeader();
      return res;
    } catch (error) {
      return rejectWithValue(error.response.data); //error.message
    }
  }
);
export const RefreshUserThunk = createAsyncThunk(
  'user/current',
  async (_, API) => {
    const state = API.getState();
    const persistedToken = state.user.token;
    if (persistedToken === null) {
      return API.rejectWithValue('Unable to fetch user');
    }
    try {
      authHeader(persistedToken);
      const res = await axios.get('/users/current');
      return res.data;
    } catch (error) {
      return API.rejectWithValue(error.message);
    }
  }
);

// ------------------------------User-Thunk--------------------------//
