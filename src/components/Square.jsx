import React from "react";
import "../styleslist/Square.css";

export const Square = ({ onClick, value }) => (
  <div className="square-div" onClick={onClick}>
    <span className="square-value-text"> {value}</span>
  </div>
);
