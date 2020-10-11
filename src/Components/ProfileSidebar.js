import React from "react";
import { NavLink } from "react-router-dom";

import "./ProfileSidebar.css";

const ProfileSidebar = () => {
  return (
    <nav className="ProfileSidebar">
      <ul>
        <NavLink to="/" exact  className="navink" activeClassName="navlinkActive">
          <li>Profile</li>
        </NavLink>
        <NavLink to="/posts" className="navink" activeClassName="navlinkActive">
          <li>Posts</li>
        </NavLink>
        <NavLink to="/gallery" className="navink" activeClassName="navlinkActive">
          <li>Gallery</li>
        </NavLink>
        <NavLink to="/todo" className="navink" activeClassName="navlinkActive">
          <li>ToDO</li>
        </NavLink>
      </ul>
    </nav>
  );
};

export default ProfileSidebar;
