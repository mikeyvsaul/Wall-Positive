import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar.css';

const NavBar = (props) => {
  let navUser = props.user ?
    <div>
      <NavLink to='' className='NavBar-link' onClick={props.handleLogout}>LOG OUT</NavLink>
      &nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
      <span className='NavBar-welcome'>WELCOME, {props.user.name}</span>
    </div>
    :
    <div>
      <NavLink to='/login' className='NavBar-link'>LOG IN</NavLink>
      &nbsp;&nbsp;|&nbsp;&nbsp;
      <NavLink to='/signup' className='NavBar-link'>SIGN UP</NavLink>
    </div>;

  return (
    <div className='NavBar'>
      <nav>
        <NavLink exact to='/'>Home</NavLink>
        &nbsp;&nbsp;&nbsp;
        <NavLink exact to='/add'>Add Message</NavLink>
      </nav>
      {navUser}
    </div>
  );
};

export default NavBar;