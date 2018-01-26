import React, { Component } from 'react'
import './styles/showallbutton.css'

export default class ShowAllButton extends Component {
  render () {
    return (
      <button className='bottom-button bottom-button_show-all-button' onClick={this.props.onClick}>All entries</button>
    )
  }
}
