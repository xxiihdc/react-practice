import React, { useState, useEffect } from "react";
import Cell from "./Cell";
import Menu from "./Menu";
import "./GameStyle.css";
import { calcWinner } from "../../services/CalcGame";

const Board = () => {
  const [cells, setCells] = useState(Array(9).fill(null));
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [stepNumber, setStepNumber] = useState(0);
  const [winnerLine, setWinnerLine] = useState([]);

  const handleClick = (index) => {
    const currentHistory = history.slice(0, stepNumber + 1);
    const currentCells = currentHistory[currentHistory.length - 1].slice();

    if (currentCells[index] || calcWinner(currentCells)) return;

    currentCells[index] = stepNumber % 2 === 0 ? "X" : "O";
    setHistory([...currentHistory, currentCells]);
    setStepNumber(currentHistory.length);
    setCells(currentCells);
  };

  useEffect(() => {
    const winnerData = calcWinner(cells);
    if (winnerData) {
      setWinnerLine(winnerData);
      console.log(`Player ${stepNumber % 2 === 0 ? "O" : "X"} wins!`);
    }
  }, [cells]);

  const moveToStep = (step) => {
    const newHistory = history.slice(0, step + 1);
    setHistory(newHistory);
    setStepNumber(step);
    setCells(history[step]);
  };

  const restartGame = () => {
    setCells(Array(9).fill(null));
    setHistory([Array(9).fill(null)]);
    setStepNumber(0);
    setWinnerLine([]);
  };

  const renderCell = (index) => {
    return <Cell value={cells[index]} onClick={() => handleClick(index)} />;
  };

  return (
    <div className="game-container">
      <div className="game-board">
        {cells.map((cell, index) => (
          <div key={index} className="board-row">
            {renderCell(index)}
          </div>
        ))}
      </div>
      <Menu restartGame={restartGame} history={history} moveToStep={moveToStep} />
    </div>
  );
};

export default Board;
