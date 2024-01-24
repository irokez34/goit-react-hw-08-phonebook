import { api } from './api';

export async function getContactsApi(token) {
  const { data } = await api.get('/contacts', {
    headers: { Authorization: `Bearer ${token}` },
  });
  return data;
}

export const addNewContactApi = async (token, NewData) => {
  const { data } = await api.post('/contacts', NewData, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return data;
};

export const removeContactApi = async (token, id) => {
  const { data } = await api.delete(`/contacts/${id}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return data;
};

export const PatchContactApi = async (token, id) => {
  const { data } = await api.patch(`/contacts/${id}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return data;
};
