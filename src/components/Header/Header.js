import React from 'react';
import LogoutButton from './LogoutButton/LogoutButton';
import { FaUserCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';

import './Header.scss';

const Header = ({ user, logout }) => {
  // const { name } = user || {};
  return (
    <div className="Header">
      <div className="user-info">
        <Link to="/myPage">
          <FaUserCircle className="user-icon" size="18" />
          <span>{user}</span>
        </Link>
      </div>

      <LogoutButton logout={logout} />
    </div>
  );
};

export default Header;
