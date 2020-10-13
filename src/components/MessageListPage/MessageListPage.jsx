import React from 'react';
import './MessageListPage.css';
import MessageListItem from '../MessageListItem/MessageListItem';

function MessageListPage(props) {
  return (
    <>
      <h1>Message List</h1>
      <div>
        {props.messages.map(message => (
          <MessageListItem message={message} key={message._id} />
        ))}
      </div>
    </>
  );
}

export default MessageListPage;