import React from 'react';
import './WallItem.css';

function WallItem(props) {
  const wallStyle = {
    position: 'absolute',
    left: '600px',
    top: '400px'
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