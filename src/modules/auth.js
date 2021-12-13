// import axios from 'axios';

// axios.defaults.baseURL = '3.38.213.148.8333/';
// axios.defaults.withCredentials = true;

// const instance = axios.create({
//   baseURL: 'http://3.38.213.148:8333',
//   timeout: 1000,
//   // headers: { 'X-Custom-Header': 'foobar' },
// });
import request from './request';

export const users = [
  { email: 'a', password: 'a', name: 'A' },
  { email: 'b', password: 'b', name: 'B' },
  { email: 'c', password: 'c', name: 'C' },
];

export async function signIn({ email, password }) {
  // request
  // const result = await request.post('/user/signin', {
  //   email: email,
  //   password: password,
  // });

  // test
  let result = {};
  result.data = (email === 'a', password === 'a')
    ? {
        code: 200,
        message: 'Success',
        name: 'AAAAAA',
        data: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIyMCIsImlhdCI6MTYzOTM3NzkwNSwiZXhwIjoxNjQxOTY5OTA1fQ.8c-l3x2CW7ROD3M-DOip0uHSIaf_h_wbB8itzXrNTxtUnmtoYDv-HzDfcUNB1HunnRBDVy4diCncd41Cd3ok_w',
      }
    : {
        code: 200,
        message: 'Success',
        data: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIyMCIsImlhdCI6MTYzOTM3NzkwNSwiZXhwIjoxNjQxOTY5OTA1fQ.8c-l3x2CW7ROD3M-DOip0uHSIaf_h_wbB8itzXrNTxtUnmtoYDv-HzDfcUNB1HunnRBDVy4diCncd41Cd3ok_w',
      };

  return result.data;
}
