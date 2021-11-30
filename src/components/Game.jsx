import React, { useState } from "react";
import { Board } from "./Board";
import { checkWinner } from "../calculationes/calculate";

import "../styleslist/Game.css";

export const Game = () => {
  const [game, setGame] = useState([Array(9).fill(null)]);
  const [stepNumber, setStepNumber] = useState(0);
  const [xIsNext, setXIsNext] = useState(true);

  const winner = checkWinner(game[stepNumber]);

  const handleClick = (i) => {
    const timeInGame = game.slice(0, stepNumber + 1);
    const current = timeInGame[stepNumber];
    const squares = [...current];

    if (winner || squares[i]) return;

    squares[i] = xIsNext ? "X" : "O";

    setGame([...timeInGame, squares]);
    setStepNumber(timeInGame.length);
    setXIsNext(!xIsNext);
  };

  return (
    <div className="game-div">
      <div className="active-player">X</div>
      <Board onClick={handleClick} squares={game[stepNumber]} />
      <div className="wait-player">0</div>
    </div>
  );
};
