import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './SignupForm.scss';
import { signup } from '../../../modules/api';

function SignupForm({ authenticated, ...props }) {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [repassword, setRePassword] = useState(null);
  const [name, setName] = useState(null);
  const [gender, setGender] = useState(null);
  const [birthday, setBirthday] = useState(null);
  const [nickName, setNickname] = useState(null);

  // let location = { ...props };

  const [signupProcess, setSignupProcess] = useState(false);
  const [signupResult, setSignupResult] = useState(false);

  const navigate = useNavigate();

  if (gender === 'false') {
    setGender(false);
  }

  const submit = async (e) => {
    e.preventDefault();
    console.log(email, password, name, gender, birthday, nickName);
    if(signupProcess === false){
      setSignupProcess(true);
    } else if (signupProcess === true) {
      alert('처리중입니다 잠시 기다려주시기 바랍니다')
      return;
    }
    if (email && password && name && gender && birthday && nickName) {
      try {
        const result = await signup({email, password, name, gender, birthday, nickName});
        // const result = name;
        console.log(result);
        if(result !== name){//실패 
          alert('회원가입에 실패하였습니다. 잠시후 다시 시도해주시기 바랍니다.');
          setSignupProcess(false);
        } else if (result === name){
          alert('회원가입을 축하드립니다!');
          setSignupResult(true);
          setSignupProcess(false);
        }
      }catch(err) {
        alert('회원가입에 실패하였습니다. 잠시후 다시 시도해주시기 바랍니다.');
        setSignupProcess(false);
      }
    }
  };

  return (
    <div className="SignupForm content-wrapper">
      <div className="title-wrapper">
        <div className="title-box">
          <div>내 차 진단 5분만에</div>
          <div>상담부터 예약까지 한번에</div>
          <br />
          <hr />
          <h1>오분카</h1>
        </div>
      </div>
      <div className="signup-wrapper">
        {
          signupResult===false?
            <div className="signup-form">
              <h1 className="signup-text">회원가입</h1>
              <div className="signup-box">
                <div>
                  <span className="email-text">이메일</span>
                  <span className="email description">예) example@abc.com</span>
                  <div
                    className={
                      email === false && email !== null
                        ? 'signup email error'
                        : 'signup email'
                    }>
                    <input
                      // className="input id"
                      className="input id"
                      onChange={(e) => {
                        if (
                          /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/.test(
                            e.target.value,
                          ) === true
                        ) {
                          setEmail(e.target.value);
                        } else {
                          setEmail(false);
                        }
                      }}
                      type="text"
                      placeholder="email"
                    />
                  </div>
                  <span className="password-text">비밀번호</span>
                  <span className="password description">
                    *영문, 숫자 반드시 포함, 8자리 이상
                  </span>
                  {/* <div className="signup password"> */}
                  <div
                    className={
                      password === false && password !== null
                        ? 'signup password error'
                        : 'signup password'
                    }>
                    <input
                      className="input password"
                      // value={password}
                      // onChange={(e) => setPassword(e.target.value)}
                      onChange={(e) => {
                        if (
                          /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(
                            e.target.value,
                          )
                        ) {
                          setPassword(e.target.value);
                        } else {
                          setPassword(false);
                        }
                      }}
                      type="password"
                      placeholder="password"
                    />
                  </div>
                  <span className="password-check-text">비밀번호 확인</span>
                  <span className="password description">
                    비밀번호를 다시 입력해주세요
                  </span>
                  {/* <div className="signup password"> */}
                  <div
                    className={
                      (repassword === false && repassword !== null) ||
                      repassword !== password
                        ? 'signup password error'
                        : 'signup password'
                    }>
                    <input
                      className="input password"
                      // value={password}
                      // onChange={(e) => setPassword(e.target.value)}
                      onChange={(e) => {
                        if (
                          /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{4,12}$/.test(
                            e.target.value,
                          ) &&
                          e.target.value === password
                        ) {
                          setRePassword(e.target.value);
                        } else {
                          setRePassword(false);
                        }
                      }}
                      type="password"
                      placeholder="re-enter password"
                    />
                  </div>
                  <div className="half">
                    <div>
                      <span className="password-check-text">이름</span>
                      <span className="password description">예) 홍길동</span>
                      {/* <div className="signup password"> */}
                      <div
                        className={
                          name === false && name !== null
                            ? 'signup password error'
                            : 'signup password'
                        }>
                        <input
                          className="input password"
                          // value={name}
                          // onChange={(e) => setName(e.target.value)}
                          onChange={(e) => {
                            if (/^[가-힣]{2,4}$/.test(e.target.value)) {
                              setName(e.target.value);
                            } else {
                              setName(false);
                            }
                          }}
                          placeholder="name"
                        />
                      </div>
                    </div>
                    <div>
                      <span className="password-check-text">별명</span>
                      <span className="password description">
                        오분카에서 사용하실 이름을 입력해주세요
                      </span>
                      {/* <div className="signup password"> */}
                      <div
                        className={
                          nickName === false && nickName !== null
                            ? 'signup password error'
                            : 'signup password'
                        }>
                        <input
                          className="input password"
                          // value={nickName}
                          // onChange={(e) => setnickName(e.target.value)}
                          onChange={(e) => {
                            if (e.target.value.length>=2) {
                              setNickname(e.target.value);
                            } else {
                              setNickname(false);
                            }
                          }}
                          placeholder="nickname"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="half">
                    <div>
                      <span className="password-check-text">생년월일</span>
                      <span className="password description">
                        ex) 2000년 1월 2일 &gt;&gt; 2000.01.02
                      </span>
                      {/* <div className="signup password"> */}
                      <div
                        className={
                          birthday === false && birthday !== null
                            ? 'signup password error'
                            : 'signup password'
                        }>
                        <input
                          className="input password"
                          // value={birthday}
                          // onChange={(e) => setBirthday(e.target.value)}
                          onChange={(e) => {
                            if (
                              /^\d{4}.(0[1-9]|1[012]).(0[1-9]|[12][0-9]|3[01])$/.test(
                                e.target.value,
                              )
                            ) {
                              setBirthday(e.target.value);
                            } else {
                              setBirthday(false);
                            }
                          }}
                          placeholder="birthday"
                        />
                      </div>
                    </div>
                    <div>
                      <span className="password-check-text">성별</span>
                      <span className="password description">
                        성별을 입력해주세요
                      </span>
                      <div
                        className={
                          gender === false && gender !== null
                            ? 'signup password error'
                            : 'signup password'
                        }>
                        {/* <input
                          className="input password"
                          // value={gender}
                          onChange={(e) => setGender(e.target.value)}
                          placeholder="gender"
                        /> */}
                        <select
                          className="input password"
                          onChange={(e) => {
                            if (e.target.value) {
                              setGender(e.target.value);
                            }
                          }}>
                          <option value="false">선택</option>
                          <option value="male">남</option>
                          <option value="female">여</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <button
                    className="signup-button"
                    onClick={(e) => {
                      submit(e);
                    }}>
                    회원가입
                  </button>
                </div>
                <div className="to-regiter">
                  이미 계정이 있으신가요? <Link to="/login">로그인</Link>
                </div>
              </div>
            </div>
          : <div className="signup-form complete">
              <h1 className="signup-text">회원가입을 축하드려요!</h1>
              <h3>앱을 통해 차량을 등록한 후</h3>
              <h3>오분카의 모든 서비스를 이용해보세요</h3>
              <button
                    className="signup-button"
                    onClick={(e) => {
                      return navigate('/');
                    }}>
                    로그인 페이지로 이동하기
                  </button>
            </div>
        }
      </div>
    </div>
  );
}

export default SignupForm;
