import React, { Component } from 'react'
import './styles/showallbutton.css'

export default class ShowAllButton extends Component {
  render () {
    return (
      <button className='showAllButton' onClick={this.props.onClick}>All entries</button>
    )
  }
}
