import React from 'react';

const Menu = ({ status, history, moveToStep, restartGame }) => {
  return (
    <div className='game-menu'>
      <div className='status'>{status}</div>
      <button onClick={restartGame} className='restart-button'>Restart</button>
      <h3>History</h3>
      <ul>
        {history?.map((step, move) => {
          const desc = move ? `Go to move #${move}` : 'Go to game start';
          return (
            <li key={move}>
              <button onClick={() => moveToStep(move)}>{desc}</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Menu;
