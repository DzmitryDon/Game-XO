import React from "react";
import { useState } from "react";
import { Board } from "./Board";

import "../styleslist/Game.css";

export const Game = () => {
  const game = [null, null, null, null, null, null, null, null, null];
  const isX = false;
  const winner = null;

  /* const [game, setGameState] = useState(gameStart);
  const [isX, setIsX] = useState(false);
  const [winner, setWinner] = useState(null);
 */
  function checkBoard() {}
  function updateGame() {}
  function checkWinner() {}

  return (
    <div className="game-div">
      <div className="active-player">X</div>
      <Board
        checkBoard={checkBoard}
        isX={isX}
        updateGame={updateGame}
        game={game}
        checkWinner={checkWinner}
      />
      <div className="wait-player">0</div> */}
    </div>
  );
};
