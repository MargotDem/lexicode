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
    this.closeForm = this.closeForm.bind(this)
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

  handleAdd () {
    console.log('lets add')
    this.setState({
      showAddForm: true
    })
  }

  closeForm () {
    this.setState({
      showAddForm: false
    })
  }

  render () {
    let { displayAll, tagToDisplay, language, showAddForm } = this.state
    return (

      <div className='my-main'>

        { showAddForm && <AddForm closeForm={this.closeForm} /> }

        <TagsBar
          onClick={this.searchByTag}
        />
        <AlphabetBar />

        <ToggleLanguage changeLanguage={this.changeLanguage} language={language} />

        <div className='add-button-container'>
          <span className='add-button' onClick={() => { this.handleAdd() }}>Add an entry</span>
        </div>

        <EntriesContainer
          displayAll={displayAll}
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

export default Main
