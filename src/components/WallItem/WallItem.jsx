import React from 'react';
import './WallItem.css';

function WallItem(props) {
  // let xPos = props.message.locationX;
  // let yPos = props.message.locationY;
  // let orientation = props.message.orientation

  const wallStyle = {
    position: 'absolute',
    left: props.message.locationX,
    top: props.message.locationY,
    transform: `rotate(${props.message.orientation}deg)`,
    fontSize: props.message.size,
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