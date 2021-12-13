import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './LoginFrom.scss';

function LoginForm({ authenticated, login, ...props }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  let location = { ...props };
  const navigate = useNavigate();
  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const result = await login({ email, password });
      if (result !== 'Success') {
        alert('로그인 정보를 다시 확인하여 주시기 바랍니다.');
        return;
      } else if (result === 'Success') {
        const { from } = location.state || { from: { pathname: '/' } };
        return navigate(from);
      }
    } catch (err) {
      alert('로그인 정보를 다시 확인하여 주시기 바랍니다.');
    }
  };

  // const { from } = location.state || { from: { pathname: '/' } };
  // if (authenticated) return <Navigate to={from} />;

  return (
    <div className="LoginForm content-wrapper">
      <div className="title-wrapper">
        <div className="title-box">
          <div>내 차 진단 5분만에</div>
          <div>상담부터 예약까지 한번에</div>
          <br />
          <hr />
          <h1>오분카</h1>
        </div>
      </div>
      <div className="login-wrapper">
        <div className="login-form">
          <h1 className="login-text">로그인</h1>
          <div className="login-box">
            <form onSubmit={onSubmit}>
              <span className="email-text">이메일</span>
              <div className="login email">
                <input
                  className="input id"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  type="text"
                  placeholder="email"
                />
              </div>
              <span className="password-text">비밀번호</span>
              <div className="login password">
                <input
                  className="input password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  type="password"
                  placeholder="password"
                />
              </div>
              <button className="login-button" type="submit">
                Login
              </button>
            </form>
            <div className="to-regiter">
              아직 회원이 아니신가요? <Link to="/signup">회원가입</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginForm;
