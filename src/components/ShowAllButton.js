import React, { Component } from 'react'
import './styles/showallbutton.css'

export default class ShowAllButton extends Component {
  render () {
    return (
      <button className='bottomButton bottomButton_showAllButton' onClick={this.props.onClick}>All entries</button>
    )
  }
}
