import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar.css';
// import logo from '../../../src/Wall Positive Gif.gif'

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
    <div className='NavBar'>
      <nav>
        {/* <img src="{logo}" alt="Logo"/> */}
        &nbsp;&nbsp;&nbsp;
        <NavLink exact to='/'>Home</NavLink>
      </nav>
      {navUser}
    </div>
  );
};

export default NavBar;