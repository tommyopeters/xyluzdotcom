import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/" exact>
            What I Do
          </NavLink>
        </li>
        <li>
          <NavLink to="/education">Education</NavLink>
        </li>
        <li>
          <NavLink to="/work">Work</NavLink>
        </li>
        <li>
          <NavLink to="/interests">Interests</NavLink>
        </li>
        <li>
          <NavLink to="/contact">Contact</NavLink>
        </li>
        <div
          className={`line ${window.location.pathname.split("/")[1]} `}
        ></div>
      </ul>
    </nav>
  );
};

export default NavBar;
