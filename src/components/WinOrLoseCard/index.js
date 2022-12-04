// Write your code here.

import './index.css'

const WinOrLoseCard = props => {
  const {isWon, score, onAgain} = props

  return (
    <div className="win-bg">
      <img
        className="image-win"
        src={
          isWon
            ? 'https://assets.ccbp.in/frontend/react-js/won-game-img.png'
            : 'https://assets.ccbp.in/frontend/react-js/lose-game-img.png'
        }
        alt="win or lose"
      />
      <h2>{isWon ? 'You Won' : 'You Lose'}</h2>
      <div>
        <p>{isWon ? 'Best Score' : 'Score'}</p>
        <p>{score} / 12</p>
      </div>
      <button type="button" className="button2" onClick={onAgain}>
        Play Again
      </button>
    </div>
  )
}

export default WinOrLoseCard
