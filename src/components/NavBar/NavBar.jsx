import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar.css';

const NavBar = (props) => {
  let navUser = props.user ?
    <div>
      {/* <NavLink exact to='/add' className='NavBar-link'>Add Message</NavLink>
      &nbsp;&nbsp;|&nbsp;&nbsp;&nbsp; */}
      <NavLink exact to='/list' className='NavBar-link'>Your Messages</NavLink>
      &nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
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
      <nav id="NavBar" className="NavBar">
        <img className="Logo" src="WallPositiveGif.gif" alt="Logo" />
        &nbsp;&nbsp;&nbsp;
        <NavLink exact to='/'>The Wall</NavLink>
        {navUser}
      </nav>
  );
};

export default NavBar;