import React from 'react';
import './WallItem.css';

function WallItem(props) {
  const wallStyle = {
    position: 'absolute',
    left: props.message.locationX,
    top: props.message.locationY,
    transform: `rotate(${props.message.orientation}deg)`,
    fontSize: props.message.font === "CFT masapunk" ? props.message.size + 12 : props.message.size,
    color: props.message.color,
    fontFamily: props.message.font,
    fontWeight: props.message.font === "discontinuo tfb" ? 'bold' : '',
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