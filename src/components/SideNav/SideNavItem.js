import React from "react";

function SidebarItem({ menu, isActive }) {
  return (
    <div className={'SideNavItem'+(isActive?" active":" inactive")}>
      <p>{menu.name}</p>
    </div>
  );
}

export default SidebarItem;