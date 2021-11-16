import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import './loginForm.css';

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
        <div className="login-box">
            <div className="title">
                <h1>오분카</h1>
            </div>
            <form onSubmit={onSubmit}>
                <h1>Login</h1>
                <div>
                    <input
                        className="input id"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        type="text"
                        placeholder="email"
                    />
                </div>
                <div>
                    <input
                        className="input pw"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        type="password"
                        placeholder="password"
                    />
                </div>
                <button className="loginButton" type="submit" >Login</button>
            </form>
        </div>
        
    );
}

export default LoginForm;