import React from "react";
import { NavLink } from 'react-router-dom';
import "./NavBar.css";

const NavBar = () => {
  return (
    <nav className="NavBar">
      <NavLink exact to="/">Home</NavLink>
      <NavLink exact to="/Food">Food</NavLink>
      <NavLink exact to="/Soda">Soda</NavLink>
    </nav>
  );
}

export default NavBar;