import React from "react";
import LogoutButton from "./LogoutButton/LogoutButton"
import { FaUserCircle } from 'react-icons/fa'
import './Header.scss'

const Header = ({ user, logout }) => {
    const { name } = user || {};
    console.log(user);
    return (
        <div className="Header">
            <div className="user-info">
                <FaUserCircle className="user-icon" size="18"/>
                <span>{name}</span>
            </div>
            
            <LogoutButton logout={logout} />
        </div>
    );
}

export default Header;