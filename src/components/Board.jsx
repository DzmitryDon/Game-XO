import React from "react";
import { Square } from "./Square";

import "../styleslist/Board.css";

export const Board = (props) => {
  let CounterIndex = -1;
  const makeSquares = props.game.map(() => {
    CounterIndex++;

    return (
      <Square
        boxIndex={CounterIndex}
        checkBoard={props.checkBoard}
        isX={props.isX}
        updateGame={props.updateGame}
        game={props.game}
        checkWinner={props.checkWinner}
      />
    );
  });

  return <div className="board-div">{makeSquares}</div>;
};
