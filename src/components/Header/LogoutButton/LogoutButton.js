import React from "react";
import { useNavigate } from "react-router-dom";

const LogoutButton = ({ logout }) => {
    let navigate = useNavigate();
    const onClick = () => {
        logout();
        alert("로그아웃 되었습니다");
        navigate("/");
    };
    return (
        <div>
            <button className="logout-button" onClick={onClick}>로그아웃</button>
        </div>
    );
}

export default LogoutButton;