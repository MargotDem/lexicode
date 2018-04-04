import React, { Component } from 'react'
import TagsBar from './TagsBar'
import AlphabetBar from './AlphabetBar'
import EntriesContainer from './EntriesContainer'
import ScrollButton from './ScrollButton'
import ShowAllButton from './ShowAllButton'
import ToggleLanguage from './ToggleLanguage'
import AddForm from './AddForm'
import ConnectionForm from './ConnectionForm'

import { withCookies } from 'react-cookie'

import './styles/main.css'

class Main extends Component {
  constructor (props) {
    super(props)
    this.state = {
      displayAll: true,
      tagToDisplay: '',
      language: 'en',
      showAddForm: false,
      showConnectionForm: false
    }
    this.searchByTag = this.searchByTag.bind(this)
    this.displayAllEntries = this.displayAllEntries.bind(this)
    this.changeLanguage = this.changeLanguage.bind(this)
    this.handleFormVisibility = this.handleFormVisibility.bind(this)
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

  handleFormVisibility (form, shouldShow) {
    shouldShow ? document.getElementById('body').className = 'noScroll'
    : document.getElementById('body').className = ''

    this.setState({
      [form]: shouldShow
    })
  }

  disconnect () {
    const { cookies } = this.props
    cookies.set('admin', 'false')
    window.location.reload()
  }

  render () {
    let { displayAll, tagToDisplay, language, showAddForm, showConnectionForm } = this.state
    const { cookies } = this.props
    let isAdminLogged = cookies.get('admin') === 'true'
    return (

      <div className='my-main'>

        { showAddForm && <AddForm closeForm={this.handleFormVisibility} /> }

        { showConnectionForm && <ConnectionForm closeForm={this.handleFormVisibility} /> }

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

        {
          !isAdminLogged && <span className='connection-button' onClick={() => { this.handleFormVisibility('showConnectionForm', true) }}>
            connection
          </span>
        }

        {
          isAdminLogged && <span className='add-button' onClick={() => { this.handleFormVisibility('showAddForm', true) }}>
            add an entry
          </span>
        }

        {
          isAdminLogged && <span className='disconnection-button' onClick={() => { this.disconnect() }}>
            disconnect
          </span>
        }

        <div className='mobile-footer'>
          <ShowAllButton onClick={this.displayAllEntries} />
          <ScrollButton />
        </div>
      </div>
    )
  }
}

export default withCookies(Main)
