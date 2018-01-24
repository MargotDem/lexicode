import React, { Component } from 'react'
import './styles/scrollbutton.css'

export default class ScrollButton extends Component {
  scrollToTop () {
    window.scrollTo(0, 0)
  }

  render () {
    return (
      <button className='bottomButton bottomButton_scrollButton' onClick={this.scrollToTop}>Scroll to top</button>
    )
  }
}
