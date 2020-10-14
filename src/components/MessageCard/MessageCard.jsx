import React from 'react';
import { Link } from 'react-router-dom';

function MessageCard({message}) {
  return (
    <div className='panel panel-default'>
      <div className='panel-heading'>
        <h3 className='panel-title'>{message._id}</h3>
      </div>
      <div className='panel-body'>
        <dl>
          <dt>Message</dt>
          <dd>{message.content}</dd>
        </dl>
      </div>
      <div className='panel-footer'>
        <Link to='/'>RETURN TO WALL</Link>
      </div>
    </div>
  );
}

export default MessageCard;