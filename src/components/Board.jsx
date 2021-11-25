import React from "react";
import { Square } from "./Square";

import "../styleslist/Board.css";

export const Board = (props) => {
  let CounterIndex = -1;
  console.log("Передан Пропс");
  console.log(props.gameBoard);
  const makeSquares = props.gameBoard.map(() => {
    CounterIndex++;
    return (
      <Square
        key={CounterIndex}
        boxIndex={CounterIndex}
        checkBoard={props.checkBoard}
        isX={props.isX}
        updateGameSquare={props.updateGameBoard}
        gameSquare={props.gameBoard}
        checkWinner={props.checkWinner}
      />
    );
  });

  return <div className="board-div">{makeSquares}</div>;
};
