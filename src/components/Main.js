import React, { Component } from 'react'

import TagsBar from './TagsBar'
import AlphabetBar from './AlphabetBar'
import EntriesContainer from './EntriesContainer'
import ScrollButton from './ScrollButton'
import ShowAllButton from './ShowAllButton'
import ToggleLanguage from './ToggleLanguage'

import './styles/main.css'

class Main extends Component {
  constructor (props) {
    super(props)
    this.state = {
      displayAll: true,
      tagToDisplay: ''
    }
    this.searchByTag = this.searchByTag.bind(this)
    this.displayAllEntries = this.displayAllEntries.bind(this)
  }

  searchByTag (tag) {
    this.setState({
      displayAll: false,
      tagToDisplay: tag
    })
    window.scrollTo(0, 0)
  }

  displayAllEntries () {
    this.setState({
      displayAll: true
    })
    window.scrollTo(0, 0)
  }

  render () {
    let { displayAll, tagToDisplay } = this.state
    return (

      <div className='my-main'>

        <TagsBar
          onClick={this.searchByTag}
        />
        <AlphabetBar />

        <ToggleLanguage />

        <EntriesContainer
          displayAll={displayAll}
          tagToDisplay={tagToDisplay}
          onClick={this.searchByTag}
        />
        <div className='mobile-footer'>
          <ShowAllButton onClick={this.displayAllEntries} />
          <ScrollButton />
        </div>
      </div>
    )
  }
}

export default Main
