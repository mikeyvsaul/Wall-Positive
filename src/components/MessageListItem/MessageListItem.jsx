import React from 'react';
import {Link} from 'react-router-dom';
import './MessageListItem.css';

function MessageListItem(props) {
  return (
    <div className='panel panel-default'>
      <div className="panel-heading">
        <h3 className='panel-title'>{props.message.content}</h3>
      </div>
      <Link
        className='btn btn-xs btn-info'
        to={{
          pathname: '/details',
          state: {message: props.message}
        }}
      >
        DETAILS
      </Link>
      <Link
        className='btn btn-xs'
        to={{
          pathname: '/edit',
          state: {message: props.message}
        }}
      >
        EDIT
      </Link>
      <button
        className="btn btn-xs btn-danger margin-left-10"
        onClick={() => props.handleDeleteMessage(props.message._id)}
      >
        DELETE
      </button>
    </div>
  )
}

export default MessageListItem;