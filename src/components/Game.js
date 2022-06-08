import React, { useState } from "react";
import { calculateWinner } from "../utils";
import Board from "./Board";

function Game() {
  const [history, setHistory] = useState([{ squares: Array(9).fill(null) }]);
  const [stepNumber, setStepNumber] = useState(0);
  const [xIsNext, setXIsNext] = useState(true);
  const current = history[stepNumber];
  const squares = current.squares.slice();
  const winner = calculateWinner(squares);
  const xO = xIsNext ? "X" : "O";

  const handleClick = (i) => {
    const hist = history.slice(0, stepNumber + 1);

    if (winner || squares[i]) {
      return;
    }
    squares[i] = xIsNext ? "X" : "O";

    setHistory(hist.concat([{ squares }]));
    setStepNumber(hist.length);
    setXIsNext(!xIsNext);
  };

  const jumpTo = (step) => {
    setStepNumber(step);
    setXIsNext(step % 2 === 0);
  };

  return (
    <div className="game">
      <div className="game-board">
        <Board
          squares={current.squares}
          onClick={(i) => handleClick(i)}
          onReset={() => jumpTo(0)}
          winner={winner}
          xO={xO}
        />
      </div>
    </div>
  );
}

export default Game;
