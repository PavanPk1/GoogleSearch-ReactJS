import {Component} from 'react'
import './index.css'
import SuggestionItem from '../SuggestionItem'

class GoogleSuggestions extends Component {
  state = {
    searchInput: '',
  }

  searchResults = event => {
    this.setState({
      searchInput: event.target.value,
    })
  }

  onclickArrow = suggestion => {
    this.setState({
      searchInput: suggestion,
    })
  }

  render() {
    const {searchInput} = this.state
    const {suggestionsList} = this.props
    const filteredSearchBar = suggestionsList.filter(item =>
      item.suggestion.toLowerCase().includes(searchInput.toLowerCase()),
    )
    return (
      <div className="container">
        <div className="Dashboard">
          <img
            src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
            className="googleLogo"
            alt="google logo"
          />
          <div className="search-container">
            <div className="search-bar">
              <img
                src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
                alt="search icon"
                className="searchLogo"
              />
              <input
                type="search"
                className="inputSearch"
                placeholder="Search Google"
                onChange={this.searchResults}
                value={searchInput}
              />
            </div>
            <ul className="search-results-container">
              {filteredSearchBar.map(search => (
                <SuggestionItem
                  suggestion={search.suggestion}
                  key={search.id}
                  onclickArrow={this.onclickArrow}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default GoogleSuggestions
