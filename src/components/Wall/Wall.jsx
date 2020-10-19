import React from 'react';
import './Wall.css';
import WallItem from '../WallItem/WallItem';

function Wall(props) {
  // If a user is not logged in, the doubleclick function to add a message will not be available
  return (
    <>
      {!props.user ? (
        <>
          <h4 className="Site-title">Log in or Sign Up in Order to Post a Message</h4>
          <div className="Wall-grid">
            <img className="Wall-logo" src="MainLogoWhite.gif" alt="logo"/>
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
          <h4 className="Site-title">Double Click anywhere to Create a Message</h4>
          <div className="Wall-grid" onDoubleClick={(e) => props.handleClick(e)}>
            <img className="Wall-logo" src="MainLogoWhite.gif" alt="logo"/>
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