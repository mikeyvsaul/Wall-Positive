import React from 'react';
import './Wall.css';
import WallItem from '../WallItem/WallItem';

function Wall(props) {
  // const circles = document.getElementById('circles');

  // circles.addEventListener('click', function(evt) {
  //   // addCircle(evt.clientX, evt.clientY);
  //   console.log('click')
  // })
  // const wallStyle = {
  //   position: 'absolute',
  //   right: '464 px',
  //   top: '107 px'
  // }

  return (
    <>
      <h1 className="Site-title">Wall Positive</h1>
      <div className="Wall-grid" onClick={(e) => props.handleClick(e)}>
      {/* <div className="Wall" > */}
        {props.messages.map(message => (
          <WallItem 
            key={message._id} 
            message={message}
            // style={wallStyle}
          />
        ))}
      </div>
      {/* </div> */}
    </>
  );
}

export default Wall;