import React from "react";

import "../styleslist/Square.css";

export const Square = (props) => {
  const handleClick = async (index) => {
    if (props.checkBoard(index)) {
      if (props.isX === false) {
        await props.updateGame(index, "0");
      } else {
        await props.updateGame(index, "X");
      }

      props.checkWinner();
    }
  };

  return (
    <div className="square-div" onClick={() => handleClick(props.boxIndex)}>
      <span className="square-value-text">
        {props.game[props.boxIndex] === null ? "*" : props.game[props.boxIndex]}
      </span>
    </div>
  );
};
