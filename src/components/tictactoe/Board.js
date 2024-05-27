import { React, useState } from "react";
import Cell from "./Cell";
import Menu from "./Menu";
import "./GameStyle.css";
import { calcWinner } from "../../services/CalcGame";

const Board = () => {
  const [cells, setCells] = useState(Array(9).fill(null));
  const [currentPlayer, setCurrentPlayer] = useState("X");

  const handleClick = (index) => {
    if (cells[index] || calcWinner(cells)) return;

    const newCells = cells.slice();
    newCells[index] = currentPlayer;
    setCells(newCells);
    setCurrentPlayer(currentPlayer === "X" ? "O" : "X");
  };

  const restartGame = () => {
    setCells(Array(9).fill(null));
    setCurrentPlayer("X");
  }

  const renderCell = (index) => {
    return <Cell value={cells[index]} onClick={() => handleClick(index)} />;
  };

  return (
    <div className="game-container">
      <div className="game-board">
        {cells.map((_cell, index) => (
          <div key={index} className="board-row">
            {renderCell(index)}
          </div>
        ))}
      </div>
        <Menu restartGame={restartGame}></Menu>
    </div>
  );
};

export default Board;
