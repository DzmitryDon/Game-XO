import React, { useState } from "react";
import { Board } from "./Board";
import { checkWinner } from "../calculationes/calculate";

import "../styleslist/Game.css";

export const Game = () => {
  const gameStart = [Array(9).fill(null)];

  const [game, setGame] = useState(gameStart);
  const [stepNumber, setStepNumber] = useState(0);
  const [xIsNext, setXIsNext] = useState(true);

  const winner = checkWinner(game[stepNumber]);

  const handleClickReset = () => {
    setGame(gameStart);
    setStepNumber(0);
    setXIsNext(true);
  };
  const handleClick = (i) => {
    const timeInGame = game.slice(0, stepNumber + 1);
    const current = timeInGame[stepNumber];
    const squares = [...current];

    if (winner || squares[i]) return;

    squares[i] = xIsNext ? "X" : "0";

    setGame([...timeInGame, squares]);
    setStepNumber(timeInGame.length);
    setXIsNext(!xIsNext);
  };

  return (
    <div className="game-div">
      <button onClick={handleClickReset} className="reset-buttom">
        Reset Game
      </button>
      <div className={xIsNext ? "active-player" : "wait-player"}>
        <span> X</span>
        <span className={"winners"}>{winner === "X" ? "Wins" : null}</span>
      </div>
      <Board onClick={handleClick} squares={game[stepNumber]} />
      <div className={xIsNext ? "wait-player" : "active-player"}>
        <span> 0</span>
        <span className={"winners"}>{winner === "0" ? "Wins" : null}</span>
      </div>
    </div>
  );
};
