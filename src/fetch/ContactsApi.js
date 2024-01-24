import { api } from './api';

export async function getContactsApi(token) {
  const response = await api.get('/contacts', {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data;
}

export const addNewContactApi = async (token, data) => {
  const response = await api.post('/contacts', data, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data;
};

export const removeContactApi = async (token, id) => {
  const response = await api.delete(`/contacts/${id}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data;
};

export const PatchContactApi = async (token, id) => {
  const { data } = await api.patch(`/contacts/${id}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return data;
};
