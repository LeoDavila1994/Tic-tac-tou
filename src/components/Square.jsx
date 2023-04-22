import React from "react";

const Square = ({ changeTurn }) => {
  return(
    <div className="square-container" onClick={changeTurn}></div>
  )
}

export default Square;