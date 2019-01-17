import React from "react";
import { NavLink } from "react-router-dom";
import CustomNavLink from "../components/CustomNavLink";
import "../css/Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <ul>
        <li>
          <NavLink exact to="/" activeClassName="active">
            Top 100 Cryptocurrency
          </NavLink>
        </li>
        <li>
          <CustomNavLink pathname="/settings" name="Settings" />
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
