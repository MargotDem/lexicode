import React, { Component } from 'react'
import axios from 'axios'

import Form from './Form'

export default class EditForm extends Component {
  constructor (props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.closeForm = this.closeForm.bind(this)
  }

  componentWillMount () {
    axios.get('/api/entries/' + this.props.entry)
      .then(entry => {
        let entryData = entry.data[0]
        this.setState({
          id: entryData['id'],
          name: entryData['name'],
          isArticle: entryData['isArticle'],
          tag1: entryData['tag_1'],
          tag2: entryData['tag_2'],
          tag3: entryData['tag_3'],
          text: entryData['text'],
          translationFr: entryData['translation_fr'],
          links: entryData['links']
        })
      })
      .catch(error => {
        console.log(error)
      })
  }

  handleSubmit (entry) {
    let { id, name } = entry
    console.log(id)
    axios.put('/api/entries/' + id, entry)
      .then(response => {
        console.log(response)
      })
      .catch(error => {
        console.log(error)
      })
      .then(() => {
        this.closeForm(false, 0)
        this.props.fetchEntries(name)
      })
  }

  closeForm () {
    this.props.closeForm(false, 0)
  }

  render () {
    return (
      <Form
        isEdit
        {...this.state}
        handleSubmit={this.handleSubmit}
        closeForm={this.closeForm}
      />
    )
  }
}
