import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.scss';

const Header = () => {
  const navLinkItems = [
    {
      id: 1,
      name: 'Home',
      path: '/',
    },
    {
      id: 2,
      name: 'Posts',
      path: '/posts',
    },
    {
      id: 3,
      name: 'Projects',
      path: '/projects',
    },
  ];

  return (
    <div className="header">
      <div className="header-title">
        <h2>
          <NavLink to="/" activeClassName="selected" exact>
            Akshay Pithadiya
          </NavLink>
        </h2>
      </div>
      <div className="header-link">
        <ul>
          {navLinkItems.map((item) => {
            return (
              <li key={item.id}>
                <NavLink to={item.path} activeClassName="selected" exact>
                  {item.name.toUpperCase()}
                </NavLink>
              </li>
            );
          })}
          <li>CV</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
