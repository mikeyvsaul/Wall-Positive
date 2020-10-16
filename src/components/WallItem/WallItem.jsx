import React from 'react';
import './WallItem.css';

function WallItem(props) {
  return (
      <div className="panel-heading">
        <h3 className='panel-title'>{props.message.content}</h3>
      </div>
  )
}

export default WallItem;