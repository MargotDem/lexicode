import React, { Component } from 'react'

import TagsBar from './TagsBar'
import AlphabetBar from './AlphabetBar'
import EntriesContainer from './EntriesContainer'
import ScrollButton from './ScrollButton'
import ShowAllButton from './ShowAllButton'
import ToggleLanguage from './ToggleLanguage'
import AddForm from './AddForm'

import './styles/main.css'

class Main extends Component {
  constructor (props) {
    super(props)
    this.state = {
      displayAll: true,
      tagToDisplay: '',
      language: 'en',
      showAddForm: false
    }
    this.searchByTag = this.searchByTag.bind(this)
    this.displayAllEntries = this.displayAllEntries.bind(this)
    this.changeLanguage = this.changeLanguage.bind(this)
    this.closeAddForm = this.closeAddForm.bind(this)
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

  changeLanguage (language) {
    this.setState({
      language: language
    })
  }

  openAddForm () {
    document.getElementById('body').className = 'noScroll'
    this.setState({
      showAddForm: true
    })
  }

  closeAddForm () {
    document.getElementById('body').className = ''
    this.setState({
      showAddForm: false
    })
  }

  render () {
    let { displayAll, tagToDisplay, language, showAddForm } = this.state
    return (

      <div className='my-main'>

        { showAddForm && <AddForm closeForm={this.closeAddForm} /> }

        <TagsBar
          onClick={this.searchByTag}
        />
        <AlphabetBar />

        <ToggleLanguage changeLanguage={this.changeLanguage} language={language} />

        <EntriesContainer
          displayAll={displayAll}
          tagToDisplay={tagToDisplay}
          onClick={this.searchByTag}
          language={language}
        />

        <span className='add-button' onClick={() => { this.openAddForm() }}>add an entry</span>

        <div className='mobile-footer'>
          <ShowAllButton onClick={this.displayAllEntries} />
          <ScrollButton />
        </div>
      </div>
    )
  }
}

export default Main
