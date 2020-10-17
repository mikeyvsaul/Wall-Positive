import React from 'react';
import './Wall.css';
import WallItem from '../WallItem/WallItem';

function Wall(props) {
  return (
    <>
      {!props.user ? (
        <>
          <h1 className="Site-title">Wall Positive</h1>
          <div className="Wall-grid">
            {props.messages.map(message => (
              <WallItem 
              key={message._id} 
              message={message}
              />
            ))}
          </div>
        </>
      ) : (
        <>
          <h1 className="Site-title">Wall Positive</h1>
          <div className="Wall-grid" onDoubleClick={(e) => props.handleClick(e)}>
            {props.messages.map(message => (
              <WallItem 
              key={message._id} 
              message={message}
              />
              ))}
          </div>
        </>
      )
    }
    </>
  );
}

export default Wall;