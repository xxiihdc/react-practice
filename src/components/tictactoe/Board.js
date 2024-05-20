import React from 'react';
import Cell from './Cell';
import "./GameStyle.css"

const Board = () => {
	return (
		<div className='game-board'>
			{
				Array(9).fill().map((item, index) => (
					<Cell key={index}></Cell>
				))
			}
		</div>
	);
};

export default Board;