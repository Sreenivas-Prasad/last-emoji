// Write your code here.
import {Component} from 'react'
import './index.css'

const NavBar = props => {
  const {score, topScore, isActive} = props
  return (
    <nav>
      <div className="img-text">
        <div className="image1">
          <img
            src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
            alt="emoji logo"
            className="nav-img"
          />
          <h2 className="emoji-text">Emoji Game</h2>
        </div>
        {isActive && (
          <div className="scores">
            <p className="score">Score:{score}</p>
            <p className="top-score">Top Score:{topScore}</p>
          </div>
        )}
      </div>
    </nav>
  )
}

export default NavBar
