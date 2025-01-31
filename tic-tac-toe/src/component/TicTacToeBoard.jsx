function TicTacToeBoard({ board, onHandleClick }) {
  return (
    <>
      <div className="grid">
        {[...Array(9)].map((_, index) => (
          <div className="grid-item" key={index}>
            <button
              className={
                board[index] === ""
                  ? "square"
                  : board[index] === "X"
                  ? "square button-X"
                  : "square button-O"
              }
              onClick={() => onHandleClick(index + 1)}
            >
              {board[index]}
            </button>
          </div>
        ))}
      </div>
    </>
  );
}

export default TicTacToeBoard;
