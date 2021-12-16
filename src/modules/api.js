import request from './request';

//로그인
export async function signin({ email, password }) {
  // test
  // let result = {};
  // result.data = (email === 'a', password === 'a')
  //   ? {
  //       code: 200,
  //       message: 'Success',
  //       data: {
  //         name: 'AAAAAA',
  //         token:
  //           'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIyMCIsImlhdCI6MTYzOTM3NzkwNSwiZXhwIjoxNjQxOTY5OTA1fQ.8c-l3x2CW7ROD3M-DOip0uHSIaf_h_wbB8itzXrNTxtUnmtoYDv-HzDfcUNB1HunnRBDVy4diCncd41Cd3ok_w',
  //       },
  //     }
  //   : {
  //       code: 200,
  //       message: 'Success',
  //       data: '',
  //     };
  // console.log(result.data);

  // request
  const result = await request.post('/user/signin', {
    email: email,
    password: password,
  });

  return result.data;
}

//회원가입
export async function signup({
  email,
  password,
  name,
  gender,
  birthday,
  nickName,
}) {
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

//회원정보 변경
export async function updateUser({ name, email, phone, nickName }) {
  const result = await request.put(
    '/user/signin',
    {
      name: name,
      email: email,
      phone: phone,
      nickName: nickName,
    },
    {
      token: window.sessionStorage.getItem('jwt'),
    },
  );
  return result.data;
}

//회원탈퇴
export async function unsubscribe({ password }) {
  const result = await request.put(
    '/user/unsubscribe',
    { password: password },
    { token: window.sessionStorage.getItem('jwt') },
  );
  return result.data;
}

//차량목록조회
export async function getCarList() {
  const result = await request.get(`/carList`, {
    token: window.sessionStorage.getItem('jwt'),
  });
  return result.data;
}

//obd 데이터 조회
export async function getOBDData({ carModel }) {
  const result = await request.get(`/obd/info/?carModel=${carModel}`, {
    token: window.sessionStorage.getItem('jwt'),
  });
  return result.data;
}

//차량 삭제
export async function deleteCar({ carModel }) {
  const result = await request.put(`/car/delete?carModel=${carModel}`, {
    token: window.sessionStorage.getItem('jwt'),
  });
  return result.data;
}
