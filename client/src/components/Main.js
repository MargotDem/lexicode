import React, { Component } from 'react'

import TagsBar from './TagsBar'
import AlphabetBar from './AlphabetBar'
import EntriesContainer from './EntriesContainer'
import ScrollButton from './ScrollButton'
import ShowAllButton from './ShowAllButton'
import ToggleLanguage from './ToggleLanguage'

import './styles/main.css'

export default class Main extends Component {
  constructor (props) {
    super(props)
    this.state = {
      tagToDisplay: '',
      language: 'en'
    }
    this.searchByTag = this.searchByTag.bind(this)
    this.displayAllEntries = this.displayAllEntries.bind(this)
    this.changeLanguage = this.changeLanguage.bind(this)
  }

  searchByTag (tag) {
    this.setState({
      tagToDisplay: tag
    })
    window.scrollTo(0, 0)
  }

  displayAllEntries () {
    this.setState({
      tagToDisplay: ''
    })
    window.scrollTo(0, 0)
  }

  changeLanguage (language) {
    this.setState({
      language: language
    })
  }

  render () {
    let { tagToDisplay, language } = this.state
    return (

      <div className='my-main'>

        <TagsBar
          onClick={this.searchByTag}
        />

        <AlphabetBar />

        <ToggleLanguage changeLanguage={this.changeLanguage} language={language} />

        <EntriesContainer
          tagToDisplay={tagToDisplay}
          onClick={this.searchByTag}
          language={language}
        />

        <div className='mobile-footer'>
          <ShowAllButton onClick={this.displayAllEntries} />
          <ScrollButton />
        </div>
      </div>
    )
  }
}
