import React from 'react';
import './Wall.css';
import WallItem from '../WallItem/WallItem';

function Wall(props) {
  // const circles = document.getElementById('circles');

  // circles.addEventListener('click', function(evt) {
  //   // addCircle(evt.clientX, evt.clientY);
  //   console.log('click')
  // })

  return (
    <>
      <h1 className="Site-title">Wall Positive</h1>
      <div className="Wall-grid">
      <div id="circles" onClick={(e) => props.handleClick(e)}>
        {props.messages.map(message => (
          <WallItem 
            key={message._id} 
            message={message}
          />
        ))}
      </div>
      </div>
    </>
  );
}

export default Wall;