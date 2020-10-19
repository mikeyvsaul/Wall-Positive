import React from 'react';
import { NavLink } from 'react-router-dom'
import './MessageListPage.css';
import MessageListItem from '../MessageListItem/MessageListItem';

function MessageListPage(props) {
  // Only show messages that have a user id matching that of the logged in user
  let userMessages = props.messages.filter(message => message.user === props.user._id)
  return (
    <>
      {userMessages.length < 1 ? (
        <div>
          <h2>Message List</h2>
          <h3>You have no messages yet</h3>
        </div>
      ) : (
        <div className="MessageListPage container">
          <h2>Message List</h2>
          <div className="MessageListPage-grid container">
            {userMessages.map(message => (
              <MessageListItem 
                key={message._id} 
                message={message}
                handleDeleteMessage={props.handleDeleteMessage} 
              />
            ))}
          </div>
            <NavLink exact to='/' className="btn-primary">RETURN TO WALL</NavLink>
        </div>
      )}
    </>
  );
}

export default MessageListPage;