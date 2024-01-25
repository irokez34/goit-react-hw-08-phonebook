// import { api } from './api';

// export async function getContactsApi(token) {
//   const { data } = await api.get('/contacts', {
//     headers: { Authorization: `Bearer ${token}` },
//   });

//   return data;
// }
// export const fetchContacts = createAsyncThunk(
//   'contacts/fetchAll',
//   async (_, { rejectWithValue }) => {
//     try {
//       const { data } = await axios.get('/contacts');
//       return data;
//     } catch (error) {
//       return rejectWithValue(error.message);
//     }
//   }
// );

// export const addContact = createAsyncThunk(
//   'contacts/addContact',
//   async (obj, { rejectWithValue }) => {
//     try {
//       const { data } = await axios.post('/contacts', obj);
//       return data;
//     } catch (error) {
//       return rejectWithValue(error.message);
//     }
//   }
// );

// export const deleteContact = createAsyncThunk(
//   'contacts/deleteContact',
//   async (contactId, { rejectWithValue }) => {
//     try {
//       const { data } = await axios.delete(`/contacts/${contactId}`);
//       return data;
//     } catch (error) {
//       return rejectWithValue(error.message);
//     }
//   }
// );

// export const addNewContactApi = async (token, NewData) => {
//   const { data } = await api.post('/contacts', NewData, {
//     headers: { Authorization: `Bearer ${token}` },
//   });
//   return data;
// };

// export const removeContactApi = async (token, id) => {
//   const { data } = await api.delete(`/contacts/${id}`, {
//     headers: { Authorization: `Bearer ${token}` },
//   });
//   return data;
// };

// export const PatchContactApi = async (token, id) => {
//   const { data } = await api.patch(`/contacts/${id}`, {
//     headers: { Authorization: `Bearer ${token}` },
//   });
//   return data;
// };



