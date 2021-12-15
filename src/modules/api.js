import request from './request';
// const FormData = require('form-data');

export async function signin({ email, password }) {
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
        data: {
          name: 'AAAAAA',
          token:
            'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIyMCIsImlhdCI6MTYzOTM3NzkwNSwiZXhwIjoxNjQxOTY5OTA1fQ.8c-l3x2CW7ROD3M-DOip0uHSIaf_h_wbB8itzXrNTxtUnmtoYDv-HzDfcUNB1HunnRBDVy4diCncd41Cd3ok_w',
        },
      }
    : {
        code: 200,
        message: 'Success',
        data: '',
      };
  console.log(result.data);
  return result.data;
}

export async function signup({
  email,
  password,
  name,
  gender,
  birthday,
  nickName,
}) {
  // console.log(email, password, name, gender, birthday, nickName);

  // const formData = new FormData();

  const result = await request.post('/user/signup', {
    email: email,
    password: password,
    name: name,
    gender: gender,
    birthday: birthday,
    nickName: nickName,
  });

  return result.data;
}

// console.log(email, password, name, gender, birthday, nickname);

//   const formData = new FormData();

//   formData.append('email',email);
//   formData.append('password',password);
//   formData.append('name',name);
//   formData.append('gender',gender);
//   formData.append('birthday',birthday);
//   formData.append('nickname',nickname);

//   const result = await request.post('/user/signup',formData, { headers: formData.getHeaders() });

//   return result.data;
