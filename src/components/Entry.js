import React, { Component } from 'react'

import renderHTML from 'react-render-html'

import './styles/entry.css'

class Entry extends Component {
  constructor (props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }

  /* when a tags-bar__button is clicked, this function gets the specific tag name
  and calls the props-passed grand-parent's-state-changing onClick function,
  passing it the name as argument, so as to display every entry corresponding to
  said tag: */
  handleClick (e) {
    const tag = e.target.value
    this.props.onClick(tag)
  }

  render () {
    let { tags, title, text, links, art } = this.props
    const tagButtons = []

    const tagNames = tags

    for (var tag in tagNames) {
      const tagButtonClass = 'tags-bar__button tags-bar__button_' + tagNames[tag]

      tagButtons.push(
        <button
          key={tag}
          value={tagNames[tag]}
          className={tagButtonClass}
          type='button'
          onClick={this.handleClick}
        >
          {tagNames[tag]}
        </button>
      )
    }

    const isArt = art ? ' entry__text_lightgray' : ''
    return (
      <div className='entry' id={title[0]} ref={title[0]}>

        <div className='entry__header'>
          <div className='entry__title'>
            {title}
          </div>
          <div className='entry__tags'>
            {tagButtons}
          </div>
        </div>

        <div className={'entry__text' + isArt}>
          {renderHTML(text)}
        </div>

        <div className='entry__links'>
          {links}
        </div>

      </div>
    )
  }
}

export default Entry
