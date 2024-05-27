import React from 'react';
import "./GameStyle.css"

const Cell = (props) => {
  return (
    <div className='game-cell' onClick={props.onClick}>
      {props.value}
    </div>
  );
};

export default Cell;