import React, { Component } from 'react'
import Form from './Form'

import axios from 'axios'

export default class AddForm extends Component {
  constructor (props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.closeForm = this.closeForm.bind(this)
  }

  handleSubmit (entry) {
    axios.post('/api/entries', entry)
      .then(response => {
        console.log(response)
      })
      .catch(error => {
        console.log(error)
      })
    window.location.reload()
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
