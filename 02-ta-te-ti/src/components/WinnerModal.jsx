import { Square } from "./Square.jsx"

export function WinnerModal({ winner, resetGame }) {

  if (winner === null) return null

  const winnerText = winner === false ? 'Empate' : 'Ganó:'

  return (
    <section className="winner">
      <div className="text">
        <h2> {winnerText}
        </h2>
        <header className="win">
          {winner && <Square>{winner}</Square>}
        </header>
        <footer className="">
          <button onClick={resetGame}>Restart</button>
        </footer>
      </div>

    </section>
  )
}