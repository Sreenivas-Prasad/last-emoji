// Write your code here.
import './index.css'

const EmojiCard = props => {
  const {getId, shuffledList} = props
  let {emojisList} = props
  const {id, emojiName, emojiUrl} = emojisList

  const giveId = () => {
    getId(id)
    emojisList = shuffledList()
  }

  return (
    <li>
      <button className="button1" onClick={giveId}>
        <img src={emojiUrl} className="button-img" />
      </button>
    </li>
  )
}

export default EmojiCard
