import React from "react";

import "../styleslist/Square.css";

export const Square = (props) => {
  const handleClick = (index) => {
    if (props.checkBoard(index)) {
      if (props.isX === false) {
        props.updateGameSquare(index, "0");
      } else {
        props.updateGameSquare(index, "X");
      }
      console.log("В квадрате");
      console.log(props.gameSquare);
      props.checkWinner();
    }
  };

  return (
    <div className="square-div" onClick={() => handleClick(props.boxIndex)}>
      <span className="square-value-text">
        {props.gameSquare[props.boxIndex] === null
          ? "*"
          : props.gameSquare[props.boxIndex]}
      </span>
    </div>
  );
};
