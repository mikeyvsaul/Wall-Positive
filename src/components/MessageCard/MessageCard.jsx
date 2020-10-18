import React from 'react';
import { NavLink } from 'react-router-dom';

function MessageCard({message}) {
  return (
    <div className='panel panel-default'>
      <div className='panel-body'>
        <dl>
          <dt>Message</dt>
          <dd>{message.content}</dd>
          <dt>Message Orientation</dt>
          <dd>{message.orientation} degrees</dd>
          <dt>Font Size</dt>
          <dd>{message.size}</dd>
          <dt>Font Color</dt>
          <dd>{message.color}</dd>
          <dt>Font Type</dt>
          <dd>{message.font}</dd>
        </dl>
      </div>
      <div className='panel-footer'>
        <NavLink to='/'>RETURN TO WALL</NavLink>
        &nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
        <NavLink exact to='/list' className='NavBar-link'>Back to Your Messages</NavLink>
      </div>
    </div>
  );
}

export default MessageCard;