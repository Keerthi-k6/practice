import React from 'react'
import useTicTacToe from './useTicTacToe'
const TicTacToe = ({}) => {
    const {board, handleClick,getStatusMessage,resetGame} = useTicTacToe()

  return (
    <div>
         <h1>Tic Tac Toe</h1>
        <div className="game">
          <div className="status">
            {getStatusMessage()}
         <button className="reset-button" onClick={resetGame}> Reset Game</button>
          </div>
          <div className="board">
             {board.map((b,index)=>
            {
                  return <button key={index} className='cell' onClick={()=>handleClick(index) } disabled = {b!==null}>{b}</button>
            })}
          </div>
      </div>
    </div>
  )
}

export default TicTacToe
