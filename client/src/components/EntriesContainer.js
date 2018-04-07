import React, { Component } from 'react'
import axios from 'axios'
import { withCookies } from 'react-cookie'

import Entry from './Entry'
import EditForm from './EditForm'
import AddForm from './AddForm'
import ConnectionForm from './ConnectionForm'

import './styles/entriescontainer.css'

class EntriesContainer extends Component {
  constructor (props) {
    super(props)
    this.state = {
      entries: [],
      showEditForm: false,
      showAddForm: false,
      showConnectionForm: false,
      entry: 0
    }
    this.handleFormVisibility = this.handleFormVisibility.bind(this)
    this.fetchEntries = this.fetchEntries.bind(this)
  }

  componentDidMount () {
    this.fetchEntries()
  }

  fetchEntries (title) {
    axios.get('/api/entries')
      .then(entries => {
        this.setState({ entries: entries.data })
      })
      .catch(error => {
        console.log(error)
      })
      .then(() => {
        title && document.getElementById(title).scrollIntoView({block: 'center'})
      })
  }

  handleFormVisibility (form, shouldShow, id) {
    shouldShow ? document.getElementById('body').className = 'noScroll'
    : document.getElementById('body').className = ''

    this.setState({
      [form]: shouldShow,
      entry: id
    })
  }

  disconnect () {
    const { cookies } = this.props
    cookies.set('admin', 'false')
    window.location.reload()
  }

  render () {
    let { tagToDisplay, onClick, language } = this.props
    let { entries, showEditForm, showAddForm, showConnectionForm, entry } = this.state

    const { cookies } = this.props
    let isAdminLogged = cookies.get('admin') === 'true'

    return (
      <div className='entries'>
        {
          entries.map((entry) => {
            let tags = [entry.tag_1, entry.tag_2, entry.tag_3]
            let text = language === 'en' ? entry.text : (entry.translation_fr !== '-' ? entry.translation_fr : entry.text)

            if (tagToDisplay === '' || tags.indexOf(tagToDisplay) > -1) {
              return (
                <Entry
                  id={entry.id}
                  key={entry.id}
                  title={entry.name}
                  text={text}
                  links={entry.links}
                  art={entry.isArticle}
                  tags={tags}
                  onClick={onClick}
                  openForm={this.handleFormVisibility}
                  fetchEntries={this.fetchEntries}
                />
              )
            }
            return null
          })
        }

        {
          !isAdminLogged &&
          <span
            className='connection-button'
            onClick={() => { this.handleFormVisibility('showConnectionForm', true) }}
          >
            connection
          </span>
        }

        {
          isAdminLogged &&
          <span
            className='add-button'
            onClick={() => { this.handleFormVisibility('showAddForm', true) }}
          >
            add an entry
          </span>
        }

        {
          isAdminLogged &&
          <span
            className='disconnection-button'
            onClick={() => { this.disconnect() }}
          >
            disconnect
          </span>
        }

        { showConnectionForm && <ConnectionForm closeForm={this.handleFormVisibility} /> }

        { showAddForm && <AddForm closeForm={this.handleFormVisibility} fetchEntries={this.fetchEntries} /> }

        { showEditForm && <EditForm entry={entry} closeForm={this.handleFormVisibility} fetchEntries={this.fetchEntries} /> }
      </div>
    )
  }
}

export default withCookies(EntriesContainer)

/* this works */
// componentDidMount () {
//   this.callApi()
//     .then(res => this.setState({ entries: res }))
//     .catch(err => console.log(err))
// }
//
// async callApi () {
//   const response = await fetch('/api/entries')
//   const body = await response.json()
//   if (response.status !== 200) throw Error(body.message)
//
//   return body
// }

/* this worked too */

// fetch('/api/entries')
//   .then(response => {
//     return response.json()
//   })
//   .then(entries => {
//   // Fetched product is stored in the state
//     this.setState({ entries: entries })
//   })
