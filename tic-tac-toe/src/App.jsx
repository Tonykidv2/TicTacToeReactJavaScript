import { useState } from "react";
import "./App.css";
import StatusText from "./component/StatusText";
import TicTacToeBoard from "./component/TicTacToeBoard";

function App() {
  const [currentPlayer, SetPlayer] = useState("X");
  const [winner, SetWinner] = useState(false);
  const [tieGame, SetTie] = useState(false);
  const [board, SetBoard] = useState(["", "", "", "", "", "", "", "", ""]);

  const handleClick = (number) => {
    //Checking if game is done
    if (tieGame === true || winner === true) {
      console.log("game decided");
      return;
    }

    //Checking to see if position has already been taken
    if (board[number - 1] === "X" || board[number - 1] === "O") {
      console.log("claimed");
      return;
    }

    //Set the position
    let currentBoard = board;
    currentBoard[number - 1] = currentPlayer;
    SetBoard(currentBoard);

    //Check for winner or draw
    let isWinner = checkForWinner(board, currentPlayer);
    let isTie = checkTieGame();
    SetWinner(isWinner);
    SetTie(isTie);

    if (isWinner === true || isTie === true) {
      console.log("game decided");
      return;
    }

    //otherwise go to next player
    if (currentPlayer === "X") SetPlayer("0");
    else {
      SetPlayer("X");
    }
  };

  const checkForWinner = (board, player) => {
    //possible winning combinations
    const winningCombinations = [
      [0, 1, 2], // Row 1
      [3, 4, 5], // Row 2
      [6, 7, 8], // Row 3
      [0, 3, 6], // Column 1
      [1, 4, 7], // Column 2
      [2, 5, 8], // Column 3
      [0, 4, 8], // Diagonal 1
      [2, 4, 6], // Diagonal 2
    ];

    return winningCombinations.some((combination) =>
      combination.every((index) => board[index] === player)
    );
  };

  const checkTieGame = () => {
    return board.every((space) => space === "X" || space === "0");
  };

  const onResetClick = () => {
    console.log("Reseting Game");
    SetPlayer("X");
    SetWinner(false);
    SetTie(false);
    SetBoard(["", "", "", "", "", "", "", "", ""]);
  };

  return (
    <>
      <TicTacToeBoard board={board} onHandleClick={handleClick} />

      <StatusText
        currentPlayer={currentPlayer}
        isWinner={winner}
        isTie={tieGame}
      />

      <button
        className="reset reset-button"
        onClick={() => {
          onResetClick();
        }}
      >
        Reset
      </button>
    </>
  );
}

export default App;
