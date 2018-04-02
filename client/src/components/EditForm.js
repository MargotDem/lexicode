import React, { Component } from 'react'
import Form from './Form'

import axios from 'axios'

export default class EditForm extends Component {
  constructor (props) {
    super(props)
    this.handleChange = this.handleChange.bind(this)
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

  handleSubmit () {
    let entry = this.state
    let { id } = this.state
    axios.put('/api/entries/' + id, entry)
      .then(response => {
        console.log(response)
      })
      .catch(error => {
        console.log(error)
      })
    window.location.reload()
  }

  handleChange (e) {
    let field = e.target.name
    let value = e.target.type === 'checkbox' ? e.target.checked : e.target.value
    this.setState({
      [field]: value
    })
  }

  closeForm () {
    this.props.closeForm()
  }

  render () {
    return (
      <Form
        isEdit
        {...this.state}
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
        closeForm={this.closeForm}
      />
    )
  }
}
