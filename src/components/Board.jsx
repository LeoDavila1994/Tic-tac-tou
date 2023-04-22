import { useState } from "react";
import Square from "./Square";

const Board = () => {

  const TURNS = {
    X: "x",
    O: "o"
  };

  const [board, setBoard] = useState(Array(9).fill(null));

  const [turn, setTurn] = useState(TURNS.X);

  const changeTurn = () => {
    if(turn === TURNS.X){
      setTurn(TURNS.O)
    } else {
      setTurn(TURNS.X)
    }
  }

  return(
    <>
      <section className="board-section">
        {
          board.map((_, index) => (
            <Square
              key={index}
              index={index}
              changeTurn={changeTurn}
              />
          ))
        }
      </section>
      <div className="turns-container">
        <span className={turn === TURNS.X? "turn-selected" : null}>x</span>
        <span className={turn === TURNS.O? "turn-selected" : null}>o</span>
      </div>
    </>
  )
}

export default Board;