import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://connections-api.herokuapp.com/',
});

const setToken = token => {
  instance.defaults.headers.common['Authorization'] = token;
};

export const delToken = () => {
  delete instance.defaults.headers.common['Authorization'];
};

export const signUp = async body => {
  return await instance.post('users/signup', body);
};

export const login = async body => {
  const { data } = await instance.post('users/login', body);
  setToken(data.token);
  return data;
};

export const profile = async () => {
  const { data } = await instance('users/current');
  return data;
};

export const logout = async () => {
  const { data } = await instance.post('users/logout');

  return data;
};

export const fetch = async () => {
  const { data } = await instance.get('contacts');

  return data;
};

export const add = async body => {
  const { data } = await instance.post('contacts', body);
  return data;
};

export const delContact = async id => {
  const { data } = await instance.delete(`contacts/${id}`);
  return data;
};
