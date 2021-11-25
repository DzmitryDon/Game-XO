import React from "react";
import { useState } from "react";
import { Board } from "./Board";

import "../styleslist/Game.css";

export const Game = () => {
  let winner = null;
  const gameStart = [null, null, null, null, null, null, null, null, null];
  const [game, setGameState] = useState(gameStart);
  const [isX, setIsX] = useState(false);
  /* const [winner, setWinner] = useState(null); */

  function checkBoard(i) {
    if (game[i] === null) {
      return true;
    }
    return false;
  }

  function updateGame(i, symbol) {
    setGameState((game[i] = symbol));
    setIsX(!isX);
    console.log("Изменена игра");
    console.log(game);
  }

  function checkWinner() {
    const WinnerSet = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let i = 0; i < WinnerSet.length; i++) {
      let checkSet = [];
      WinnerSet[i].forEach((boxIndex) => {
        checkSet.push(game[boxIndex]);
      });
      if (
        checkSet.every((e) => e === "X") ||
        checkSet.every((e) => e === "0")
      ) {
        if (checkSet[0] === "X") {
          winner = "X";
        } else {
          // eslint-disable-next-line no-unused-vars
          winner = "0";
        }
      }
    }
    console.log("При передаче игра");
    console.log(game);
  }

  return (
    <div className="game-div">
      <div className="active-player">X</div>
      <Board
        checkBoard={checkBoard}
        isX={isX}
        updateGameBoard={updateGame}
        gameBoard={game}
        checkWinner={checkWinner}
      />
      <div className="wait-player">0</div>
    </div>
  );
};
