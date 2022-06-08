import React from "react";
import {
  boardStyle,
  buttonStyle,
  containerStyle,
  instructionsStyle,
  rowStyle,
} from "../utils/style";
import Square from "./Square";

function Board(props) {
  const winnerValue = props.winner ? props.winner : "None";
  const renderSquare = (i) => {
    return <Square value={props.squares[i]} onClick={() => props.onClick(i)} />;
  };

  return (
    <div style={containerStyle} className="gameBoard">
      <div id="statusArea" className="status" style={instructionsStyle}>
        Next player: <span>{props.xO}</span>
      </div>
      <div id="winnerArea" className="winner" style={instructionsStyle}>
        Winner: <span>{winnerValue}</span>
      </div>

      <button style={buttonStyle} onClick={props.onReset}>
        Reset
      </button>
      <div style={boardStyle}>
        <div className="board-row" style={rowStyle}>
          {renderSquare(0)}
          {renderSquare(1)}
          {renderSquare(2)}
        </div>
        <div className="board-row" style={rowStyle}>
          {renderSquare(3)}
          {renderSquare(4)}
          {renderSquare(5)}
        </div>
        <div className="board-row" style={rowStyle}>
          {renderSquare(6)}
          {renderSquare(7)}
          {renderSquare(8)}
        </div>
      </div>
    </div>
  );
}

export default Board;
