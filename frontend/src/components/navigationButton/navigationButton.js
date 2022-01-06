import React from 'react';
import { useLocation, Link } from 'react-router-dom';

import './navigationButton.scss';

const navigationButton = ({ path, name, logo, logoActive }) => {
  const history = useLocation();
  const checkPath = (path) => history.pathname === path;
  return (
    <Link
      to={path}
      key={name}
      className={`nav__item ${checkPath(path) ? 'nav__item--selected' : ''}`}>
      <img
        className="nav__icon"
        alt="Tasks Sidebar Icon"
        src={checkPath(path) ? logoActive : logo}></img>
      <span>{name}</span>
    </Link>
  );
};

export default navigationButton;
