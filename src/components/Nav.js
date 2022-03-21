import React from 'react';
import {Link} from 'react-router-dom';

const Nav = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to={'/Home'}>Home</Link>
        </li>
        <li>
          <Link to={'/Profile'}>Profile</Link>
        </li>
        <li>
          <Link to={'/Single'}>Single</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
