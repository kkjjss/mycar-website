import React from "react";
// import "../css/sidebar.css";
import { Link, useLocation } from "react-router-dom";
// import {AiOutlineCar} from "react-icons/ai"
import './SideNav.scss'
import Logo from "../../logo.png"

import SidebarItem from "./SideNavItem";

function Sidebar() {

  // URL의 path값을 받아올 수 있다.
  const pathName = useLocation().pathname;

  const menus = [
    { name: "기본 정보", path: "/" },
    { name: "회원 관리", path: "/about" },
    { name: "캐시 관리", path: "/profile" },
  ];

  return (
    <div className="SideNav">
      <div className="logo-box">
        <img className="logo" alt="logo" src={Logo} />
        <Link to={"/"}>오분카</Link>
      </div>
      <hr />
      <ul>
        {menus.map((menu, index) => {
        return (
          
            <Link to={menu.path} key={index}>
              <SidebarItem
                menu={menu}
                isActive={pathName === menu.path ? true : false}	// 현재 URL pathname과 객체에 담긴 path값 일치 여부 확인
              />
            </Link>
          
        );
      })}
      </ul>
    </div>
  );
}

export default Sidebar;