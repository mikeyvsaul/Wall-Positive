import React from 'react';
import './Wall.css';
import WallItem from '../WallItem/WallItem';

function Wall(props) {
  return (
    <>
      <h1>Wall Positive</h1>
      <div className="Wall-grid">
        {props.messages.map(message => (
          <WallItem 
            // key={message._id} 
            message={message}
            // handleDeleteMessage={props.handleDeleteMessage} 
          />
        ))}
      </div>
    </>
  );
}

export default Wall;