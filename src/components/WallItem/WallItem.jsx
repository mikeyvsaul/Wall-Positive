import React from 'react';
import './WallItem.css';

function WallItem(props) {
  let xPos = props.message.locationX;
  let yPos = props.message.locationY;

  const wallStyle = {
    position: 'absolute',
    left: xPos,
    top: yPos,
    transform: 'rotate(30deg)',
    
  }

  return (
      <div className="panel-heading">
        <h3 className='panel-title' style={wallStyle}>
          {props.message.content}
        </h3>
      </div>
  )
}

export default WallItem;