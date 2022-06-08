import React from "react";
import {squareStyle} from "../utils/style"


function Square(props) {
    return (
      <div className="square" style={squareStyle} onClick={props.onClick}>
        {props.value}
      </div>
    );
  }

  export default Square