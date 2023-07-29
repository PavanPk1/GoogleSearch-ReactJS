import './index.css'

const SuggestionItem = props => {
  const {suggestion, onclickArrow} = props
  const onClickArrowBtn = () => {
    onclickArrow(suggestion)
  }
  return (
    <li className="list-container">
      <p className="search-suggestion">{suggestion}</p>
      <button type="button" className="btn" onClick={onClickArrowBtn}>
        <img
          src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
          alt="arrow"
          className="arrow-img"
        />
      </button>
    </li>
  )
}

export default SuggestionItem
