import React, { useState } from 'react'
import { Link, Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Profile from './components/Profile';
import { signIn } from './auth/auth';
import { AuthRoute } from './auth/AuthRouter';
import LogoutButton from './components/LogoutButton.js';
import Sidebar from './components/Sidebar';
import LoginForm from './components/LoginForm.js';
import RegisterForm from './components/RegisterForm';
import './App.css'

const App = () => {
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
        <Router>
            {
                authenticated ? (
                    <header>
                        <div className="head-box">
                            <Link to="/">
                                <img className="logo" src={require("./logo.png").default} alt="logo"/>
                            </Link>
                        </div>
                        
                        {/* <Link to="/">
                            <button>Home</button>
                        </Link>

                        <Link to="/about">
                            <button>About</button>
                        </Link>

                        <Link to="/profile">
                            <button>Profile</button>
                        </Link>

                        {
                            authenticated ? ( <LogoutButton logout={logout} /> ) : ( <></> )
                        }

                        {
                            authenticated ? ( <></> ) : ( signUpCompleted ? <></> :
                                <Link to="/register">
                                    <button>Register</button>
                                </Link>
                            )
                        } */}
                        <Sidebar logout={logout}/>
                    </header>
                ) : <></>
            }
            <main>
                <div class="content-box">
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
            </main>
        </Router>
    );
}

export default App;