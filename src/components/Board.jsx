import React from "react";
import { Square } from "./Square.jsx";

import "../styleslist/Board.css";

export const Board = ({ onClick, squares }) => (
  <div className="board-div">
    {squares.map((square, i) => (
      <Square key={i} onClick={() => onClick(i)} value={square} />
    ))}
  </div>
);
