import React, { useState } from "react";
import { Navigate, Link } from "react-router-dom";
import './LoginFrom.scss'

function LoginForm({ authenticated, login, ...props }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    let location = {...props};
    const onSubmit = (e) => {
        e.preventDefault();
        try {
            login({ email, password });
        } catch (err) {
            alert("Failed to login");
            setEmail("");
            setPassword("");
        }
    };

    const { from } = location.state || { from: { pathname: "/" } };
    if (authenticated) return <Navigate to={from} />;

    return (
        <div className="LoginForm content-wrapper">
            <div className="title-wrapper">
                <div className="title-box">
                    <div>설명</div>
                    <br /><hr />
                    <h1>오분카</h1>
                </div>
            </div>
            <div className="login-wrapper">
                <div className="login-form">
                    <h1 className="login-text">로그인</h1>
                    <div className="login-box">
                        <form onSubmit={onSubmit}>
                                <h5 className="email-text">이메일</h5>
                                <div className="login email">
                                    <input
                                        className="input id"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        type="text"
                                        placeholder="email"
                                    />
                                </div>
                                <h5 className="password-text">비밀번호</h5>
                                <div className="login password">
                                    <input
                                        className="input password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        type="password"
                                        placeholder="password"
                                    />
                                </div>
                                <button className="login-button" type="submit" >Login</button>
                        </form>
                        <div className="to-regiter">아직 회원이 아니신가요? <Link to="/">회원가입</Link></div>
                    </div>
                </div>
            </div>
            
        </div>
    );
}

export default LoginForm;