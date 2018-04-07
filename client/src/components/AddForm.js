import React, { Component } from 'react'
import axios from 'axios'

import Form from './Form'

export default class AddForm extends Component {
  constructor (props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.closeForm = this.closeForm.bind(this)
  }

  handleSubmit (entry) {
    let name = entry.name
    axios.post('/api/entries', entry)
      .then(response => {
        console.log(response)
      })
      .catch(error => {
        console.log(error)
      })
      .then(() => {
        this.closeForm()
        this.props.fetchEntries(name)
      })
  }

  closeForm () {
    this.props.closeForm('showAddForm', false)
  }

  render () {
    return (
      <Form
        handleSubmit={this.handleSubmit}
        closeForm={this.closeForm}
      />
    )
  }
}
