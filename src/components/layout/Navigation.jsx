import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => (
  <ul className='nav'>
    <li>
      <NavLink exact activeClassName='active' to='/'>
        Home
      </NavLink>
    </li>
    <li>
      <NavLink activeClassName='active' to='/about' >
        About
      </NavLink>
    </li>
    <li>
      <NavLink activeClassName='active' to='/contact' >
        Contact
      </NavLink>
    </li>
  </ul>
);

export default Navigation;





