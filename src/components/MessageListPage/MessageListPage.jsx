import React from 'react';
import './MessageListPage.css';
import MessageListItem from '../MessageListItem/MessageListItem';

function MessageListPage(props) {
  let userMessages = props.messages.filter(message => message.user === props.user._id)
  return (
    <>
      {userMessages.length < 1 ? (
        <>
          <h1>Message List</h1>
          <h3>You have no messages yet</h3>
        </>
      ) : (
        <div className="MessageListPage">
          <h1>Message List</h1>
          <div className="MessageListPage-grid container">
            {userMessages.map(message => (
              <MessageListItem 
                key={message._id} 
                message={message}
                handleDeleteMessage={props.handleDeleteMessage} 
              />
            ))}
          </div>
        </div>
      )}
    </>
  );
}

export default MessageListPage;