import React from 'react';
import {Link} from 'react-router-dom';
import './MessageListItem.css';

function MessageListItem(props) {
  return (
    <div className='panel panel-default'>
      <div className="panel-heading">
        <h3 className='panel-title'>{props.message.content}</h3>
      </div>
      <div className='panel-footer MessageListItem-action-panel'>
        
      </div>
    </div>
  )
}

export default MessageListItem;