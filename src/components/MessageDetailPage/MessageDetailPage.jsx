import React from 'react';
import MessageCard from '../MessageCard/MessageCard';

function MessageDetailPage(props) {
  const message = props.location.state.message;
  return (
    <>
      <h1>Message Details</h1>
      <MessageCard
        key={message._id}
        message={message}
      />
    </>
  );
}

export default MessageDetailPage;