export function calcWinner(cells){
  const winningLines = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6]
  ]
  return winningLines.find(line => line.every(index => cells[index] === 'X')) || 
        winningLines.find(line => line.every(index => cells[index] === 'O'));
}