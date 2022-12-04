/* 
Quick Tip 

- Use the below function in the EmojiGame Component to shuffle the emojisList every time when an emoji is clicked.

const shuffledEmojisList = () => {
  const {emojisList} = this.props
  return emojisList.sort(() => Math.random() - 0.5)
}

*/

// Write your code here.
import {Component} from 'react'
import NavBar from '../NavBar'
import WinOrLoseCard from '../WinOrLoseCard'
import EmojiCard from '../EmojiCard'
import './index.css'

class EmojiGame extends Component {
  state = {topScore: 0, newList: [], isActive: true}

  getScores = currentScore => {
    const {topScore} = this.state
    let newTopscore = topScore
    if (currentScore > newTopscore) {
      newTopscore = currentScore
    }
    this.setState({topScore: newTopscore, isActive: false})
  }

  getId = id => {
    const {emojisList} = this.props
    const {newList} = this.state
    const isClicked = newList.includes(id)

    if (isClicked) {
      this.getScores(newList.length)
    } else {
      if (newList.length === emojisList.length - 1) {
        this.getScores(emojisList.length)
      }

      this.setState(prevState => ({
        newList: [...prevState.newList, id],
      }))
    }
  }

  shuffledList = () => {
    const {emojisList} = this.props
    return emojisList.sort(() => Math.random() - 0.5)
  }

  resetGame = () => {
    this.setState({newList: [], isActive: true})
  }

  renderScore = () => {
    const {newList} = this.state
    const {emojisList} = this.props
    const isWon = newList.length === emojisList.length

    return (
      <WinOrLoseCard
        isWon={isWon}
        score={newList.length}
        onAgain={this.resetGame}
      />
    )
  }

  renderList = () => {
    const shuffledListt = this.shuffledList()

    return (
      <ul className="forUl">
        {shuffledListt.map(each1 => (
          <EmojiCard
            emojisList={each1}
            key={each1.id}
            getId={this.getId}
            shuffledList={this.shuffledList}
          />
        ))}
      </ul>
    )
  }

  render() {
    const {emojisList} = this.props
    const {topScore, isActive, newList} = this.state
    console.log(newList)
    return (
      <div className="emoji-bg">
        <NavBar
          topScore={topScore}
          score={newList.length}
          isActive={isActive}
        />
        <div className="for-emojicard">
          {isActive ? this.renderList() : this.renderScore()}
        </div>
      </div>
    )
  }
}

export default EmojiGame
