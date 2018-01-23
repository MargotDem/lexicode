import React, { Component } from 'react'
import TagsBar from './TagsBar'
import AlphabetBar from './AlphabetBar'
import EntriesContainer from './EntriesContainer'

class Main extends Component {
  constructor (props) {
    super(props)
    this.state = {
      displayAll: true,
      tagToDisplay: '',
      letterToGoTo: ''
    }
    this.searchByTag = this.searchByTag.bind(this)
    this.searchByLetter = this.searchByLetter.bind(this)
  }

  searchByTag (tag) {
    this.setState({ displayAll: false, tagToDisplay: tag })
    window.scrollTo(0, 0)
  }

  searchByLetter (letter) {
    this.setState({ letterToGoTo: letter })
  }

  render () {
    return (

      <div className='my-main'>

        <TagsBar
          onClick={this.searchByTag}
        />
        <AlphabetBar />
        <EntriesContainer
          displayAll={this.state.displayAll}
          tagToDisplay={this.state.tagToDisplay}
          letterToGoTo={this.state.letterToGoTo}
          onClick={this.searchByTag}
        />
      </div>
    )
  }
}

export default Main
