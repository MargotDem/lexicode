import React, { Component } from 'react'
import Entry from './Entry'
import EditForm from './EditForm'

import axios from 'axios'

import './styles/entriescontainer.css'

class EntriesContainer extends Component {
  constructor (props) {
    super(props)
    this.state = {
      entries: [],
      showEditForm: false,
      entry: 0
    }
    this.openEditForm = this.openEditForm.bind(this)
    this.closeEditForm = this.closeEditForm.bind(this)
  }

  componentDidMount () {
    axios.get('/api/entries')
      .then(entries => {
        this.setState({ entries: entries.data })
      })
      .catch(error => {
        console.log(error)
      })
  }

  openEditForm (id) {
    document.getElementById('body').className = 'noScroll'
    this.setState({
      showEditForm: true,
      entry: id
    })
  }

  closeEditForm () {
    document.getElementById('body').className = ''
    this.setState({
      showEditForm: false
    })
  }

  render () {
    let { displayAll, tagToDisplay, onClick, language } = this.props
    let { entries, showEditForm, entry } = this.state

    return (
      <div className='entries'>
        { showEditForm && <EditForm entry={entry} closeForm={this.closeEditForm} /> }

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
                  openForm={this.openEditForm}
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
