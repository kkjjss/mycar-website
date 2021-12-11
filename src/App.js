import React, { useState } from 'react'
import { Link, Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Profile from './components/Profile';
import { signIn } from './auth/auth';
import { AuthRoute } from './AuthRouter';
import LogoutButton from './components/Header/LogoutButton/LogoutButton.js';
import LoginForm from './pages/auth/login/LoginForm.js';
import RegisterForm from './components/RegisterForm';
import SideNav from './components/SideNav/SideNav';
import Header from './components/Header/Header';
import './App.scss'

export default function App() {
    const [user, setUser] = useState(null);
    // authenticated: 로그인 상태 확인
    const authenticated = user != null;
    // 로그인, 로그아웃
    const login = ({ email, password }) => setUser(signIn({ email, password }));
    const logout = () => setUser(null);
    // 회원가입
    const [signUp, setSIgnUp] = useState(false);
    const signUpCompleted = ({ sign }) => setSIgnUp({ sign });

    return (
        <Router basename={process.env.PUBLIC_URL}>
            {authenticated ?
                    <Header user={user} logout={logout}></Header>
            : <></>}
            {authenticated ? <SideNav></SideNav> : <></>}
            <div className="content-box">
                <Routes >
                    {/* 로그인 & 회원가입 */}
                    {/* 인증정보 필요X */}
                    <Route path="/register" element={ <RegisterForm authenticated={authenticated} signUpCompleted={signUpCompleted} /> } />
                    <Route path="/login" element={ <LoginForm authenticated={authenticated} login={login} /> } />

                    {/* 인증정보 필요 라우터 */}
                    <Route path="/profile" element={
                        <AuthRoute authenticated={authenticated} >
                            <Profile user={user} />
                        </AuthRoute>
                    }/>
                    <Route path="/" element={
                        <AuthRoute authenticated={authenticated} >
                            <Home />
                        </AuthRoute>
                    } />

                    <Route path="/about" element={
                        <AuthRoute authenticated={authenticated} >
                            <About/>
                        </AuthRoute>
                    } />
                </Routes> 
            </div>
        </Router>
    );
}
