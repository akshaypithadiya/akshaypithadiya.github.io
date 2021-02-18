import React from "react";

const Header = () => {
  return (
    <div className="header">
      <div className="header-title">
        <h2>Akshay Pithadiya</h2>
      </div>
      <div className="header-link">
        <ul>
          <li>
            <a href="#">HOME</a>
          </li>
          <li>
            <a href="#">BLOG</a>
          </li>
          <li>
            <a href="#">PROJECTS</a>
          </li>
          <li>
            <a href="#">CV</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
