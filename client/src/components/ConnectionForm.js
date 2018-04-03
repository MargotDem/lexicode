import React, { Component } from 'react'
import Form from './Form'

import axios from 'axios'
import { withCookies } from 'react-cookie'

class ConnectionForm extends Component {
  constructor (props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.closeForm = this.closeForm.bind(this)
  }

  handleSubmit (userInput) {
    let { email, password } = userInput
    axios.get('/api/admin', {
      params: {
        email: email,
        password: password
      }
    })
      .then(response => {
        if (response.data.length > 0) {
          const { cookies } = this.props
          cookies.set('admin', 'true', { maxAge: 7200 })
        }
      })
      .catch(error => {
        console.log(error)
      })
    window.location.reload()
  }

  closeForm () {
    this.props.closeForm()
  }

  render () {
    return (
      <Form
        isConnectionForm
        handleSubmit={this.handleSubmit}
        closeForm={this.closeForm}
      />
    )
  }
}

export default withCookies(ConnectionForm)
