import React, { Component } from 'react'
import Form from './Form'

import axios from 'axios'

export default class AddForm extends Component {
  constructor (props) {
    super(props)
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.closeForm = this.closeForm.bind(this)
  }

  handleSubmit () {
    let entry = this.state
    axios.post('/api/entries', entry)
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
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
        closeForm={this.closeForm}
      />
    )
  }
}
