import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://connections-api.herokuapp.com/users',
});

const setToken = token => {
  instance.defaults.headers.common['Authorization'] = token;
};

const delToken = () => {
  delete instance.defaults.headers.common['Authorization'];
};

export const signUp = async body => {
  return await instance.post('/signup', body);
};

export const login = async body => {
  const { data } = await instance.post('/login', body);
  setToken(data.token);
  return data;
};

export const profile = async () => {
  const { data } = await instance('/current');
  return data;
};

export const logout = async () => {
  const data = await instance.post('/logout');
  delToken();
  return data;
};
