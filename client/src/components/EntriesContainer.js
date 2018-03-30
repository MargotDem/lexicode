import React, { Component } from 'react'
import Entry from './Entry'

import axios from 'axios'

import './styles/entriescontainer.css'

class EntriesContainer extends Component {
  constructor (props) {
    super(props)
    this.state = {
      entries: []
    }
  }

  componentDidMount () {
    console.log('mounted')
    axios.get('/api/entries')
      .then(entries => {
        this.setState({ entries: entries.data })
      })
      .catch(error => {
        console.log(error)
      })
  }

  render () {
    let { displayAll, tagToDisplay, onClick, language } = this.props
    let { entries } = this.state

    return (
      <div className='entries'>
        {
          entries.map((entry) => {
            let tags = [entry.tag_1, entry.tag_2, entry.tag_3]
            let text = language === 'en' ? entry.text : (entry.translation_fr !== '' ? entry.translation_fr : entry.text)

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
