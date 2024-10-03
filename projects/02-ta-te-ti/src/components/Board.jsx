import { Square } from "./Square.jsx"

export function Board({ viewBoard, updateBoard }) {

    return (
        <section className="game">
            {viewBoard.map((square, index) => {
                return (
                    <Square
                        key={index}
                        index={index}
                        updateBoard={updateBoard}
                    >
                        {square}
                    </Square>
                )

            })}
        </section>
    )

}