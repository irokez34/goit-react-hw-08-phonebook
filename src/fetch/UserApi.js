import { api } from './api';

export const LogInApit = async body => {
  const { data } = await api.post('/users/login', body);
  return data;
};
export const SignUpApi = async body => {
  const { data } = await api.post('/users/signup', body);
  return data;
};

export const LogOutApi = async token => {
  const { data } = await api.post(
    '/users/logout',
    {},
    { headers: { Authorization: `Bearer ${token}` } }
  );
  return data;
};
