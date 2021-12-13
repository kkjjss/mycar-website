import React, { useEffect, useState } from 'react';
import { Link, Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Profile from './components/Profile';
import { signIn } from './modules/auth';
import { AuthRoute } from './AuthRouter';
// import LogoutButton from './components/Header/LogoutButton/LogoutButton.js';
import LoginForm from './pages/Auth/login/LoginForm';
import SignupForm from './pages/Auth/signup/SignupForm';
import SideNav from './components/SideNav/SideNav';
import Header from './components/Header/Header';
import './App.scss';

export default function App() {
  const [user, setUser] = useState(
    window.sessionStorage.getItem('name')
      ? window.sessionStorage.getItem('name')
      : null,
  );
  const [authenticated, setAuthenticated] = useState(user ? true : false);

  // 로그인, 로그아웃
  const login = async ({ email, password }) => {
    const authResult = await signIn({ email, password });

    //로그인 실패
    if (authResult.message !== 'Success') {
      setUser(null);
      setAuthenticated(false);
      return 'Failure';
    } else if (authResult.message === 'Success') {
      setUser(authResult.name);
      setAuthenticated(true);
      window.sessionStorage.setItem('name', authResult.name);
      window.sessionStorage.setItem('email', email);
      window.sessionStorage.setItem('jwt', authResult.data);
      return 'Success';
    }
  };

  const logout = () => {
    window.sessionStorage.clear();
    setUser(null);
  };

  // 회원가입
  const [signUp, setSignUp] = useState();
  const signUpCompleted = ({ sign }) => setSignUp({ sign });

  useEffect(
    (user) => {
      if (
        window.sessionStorage.getItem('name') &&
        window.sessionStorage.getItem('email') &&
        window.sessionStorage.getItem('jwt')
      ) {
        setUser(window.sessionStorage.getItem('name'));
        setAuthenticated(true);
      } else {
        setUser(null);
        setAuthenticated(false);
      }
    },
    [user],
  );

  return (
    <Router basename={process.env.PUBLIC_URL}>
      {/* <Router> */}
      {authenticated ? <Header user={user} logout={logout}></Header> : <></>}
      {authenticated ? <SideNav></SideNav> : <></>}
      <div className="content-box">
        <Routes>
          {/* 로그인 & 회원가입 */}
          {/* 인증정보 필요X */}
          <Route
            path="/signup"
            element={
              <SignupForm
                authenticated={authenticated}
                signUpCompleted={signUpCompleted}
              />
            }
          />
          <Route
            path="/login"
            element={<LoginForm authenticated={authenticated} login={login} />}
          />

          {/* 인증정보 필요 라우터 */}
          <Route
            path="/profile"
            element={
              <AuthRoute authenticated={authenticated}>
                <Profile user={user} />
              </AuthRoute>
            }
          />
          <Route
            path="/"
            element={
              <AuthRoute authenticated={authenticated}>
                <Home user={user} />
              </AuthRoute>
            }
          />

          <Route
            path="/about"
            element={
              <AuthRoute authenticated={authenticated}>
                <About />
              </AuthRoute>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}
