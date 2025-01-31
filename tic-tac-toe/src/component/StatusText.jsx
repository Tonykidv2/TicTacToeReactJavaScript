function StatusText({ currentPlayer, isWinner, isTie }) {
  return (
    <>
      <div className="status status-Text">
        {isWinner && <p>Winner: {currentPlayer}</p>}

        {isTie && <p>Tie</p>}

        {!isWinner && !isTie && <p>Next Player: {currentPlayer}</p>}
      </div>
    </>
  );
}

export default StatusText;
