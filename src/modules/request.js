import axios from 'axios';
const https = require('https');

axios.defaults.baseURL = '3.38.213.148.8333/';
axios.defaults.withCredentials = true;

const instance = axios.create({
  baseURL: 'https://3.38.213.148:8333',
  timeout: 1000,
  httpsAgent: new https.Agent({
    rejectUnauthorized: false,
  }),
});

export default instance;
