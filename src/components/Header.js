import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <div className="header-title">
        <h2>
          <NavLink to="/" activeClassName="selected" exact>
            Akshay Pithadiya
          </NavLink>
        </h2>
      </div>
      <div className="header-NavLink">
        <ul>
          <li>
            <NavLink to="/" activeClassName="selected" exact>
              HOME
            </NavLink>
          </li>
          <li>
            <NavLink to="/blog" activeClassName="selected">
              BLOG
            </NavLink>
          </li>
          <li>
            <NavLink to="/projects" activeClassName="selected">
              PROJECTS
            </NavLink>
          </li>
          <li>CV</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
