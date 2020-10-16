import React from 'react';
import './MessageListPage.css';
import MessageListItem from '../MessageListItem/MessageListItem';

function MessageListPage(props) {
  let userMessages = props.messages.filter(message => message.user === props.user._id)
  return (
    <>
      {!props.user ? (
        <></>
      ) : (
        <>
          <h1>Message List</h1>
          <div className="MessageListPage-grid">
            {userMessages.map(message => (
              <MessageListItem 
                key={message._id} 
                message={message}
                handleDeleteMessage={props.handleDeleteMessage} 
              />
            ))}
          </div>
        </>
      )}
    </>
  );
}

export default MessageListPage;