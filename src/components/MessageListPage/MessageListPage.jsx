import React from 'react';
import './MessageListPage.css';
import MessageListItem from '../MessageListItem/MessageListItem';

function MessageListPage(props) {
  return (
    <>
      <h1>Message List</h1>
      <div className="MessageListPage-grid">
        {props.messages.map(message => (
          <MessageListItem 
            key={message._id} 
            message={message}
            handleDeleteMessage={props.handleDeleteMessage} 
          />
        ))}
      </div>
    </>
  );
}

export default MessageListPage;