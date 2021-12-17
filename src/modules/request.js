import axios from 'axios';

axios.defaults.baseURL = '3.38.213.148.8333/';
axios.defaults.withCredentials = true;

const instance = axios.create({
  baseURL: 'https://3.38.213.148:8333',
  timeout: 1000,
});

export default instance;
