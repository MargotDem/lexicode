import React, { Component } from 'react'
import axios from 'axios'

import Entry from './Entry'
import EditForm from './EditForm'

import './styles/entriescontainer.css'

class EntriesContainer extends Component {
  constructor (props) {
    super(props)
    this.state = {
      entries: [],
      showEditForm: false,
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

  handleFormVisibility (shouldShow, id) {
    shouldShow ? document.getElementById('body').className = 'noScroll'
    : document.getElementById('body').className = ''

    this.setState({
      showEditForm: shouldShow,
      entry: id
    })
  }

  render () {
    let { displayAll, tagToDisplay, onClick, language } = this.props
    let { entries, showEditForm, entry } = this.state

    return (
      <div className='entries'>
        { showEditForm && <EditForm entry={entry} closeForm={this.handleFormVisibility} fetchEntries={this.fetchEntries} /> }

        {
          entries.map((entry) => {
            let tags = [entry.tag_1, entry.tag_2, entry.tag_3]
            let text = language === 'en' ? entry.text : (entry.translation_fr !== '-' ? entry.translation_fr : entry.text)

            if (displayAll || tags.indexOf(tagToDisplay) > -1) {
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
      </div>
    )
  }
}

export default EntriesContainer

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
