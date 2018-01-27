import React, { Component } from 'react'

import './styles/tagsbar.css'

const buttons = [
  'basics',
  'front',
  'js',
  'css',
  'back',
  'php',
  'python',
  'production',
  'theory',
  'ai',
  'config',
  'general'
]

class TagsBar extends Component {
  constructor (props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }

  /*
  when a tags-bar__button is clicked, this function gets the specific tag name
  and calls the props-passed parent's-state-changing onClick function, passing
  it the name as argument, so as to display every entry corresponding to said tag:
  */
  handleClick (e) {
    const tag = e.target.value
    this.props.onClick(tag)
  }

  render () {
    return (
      <div className='tags-bar'>
        {
          buttons.map((item, index) => {
            return (
              <button
                key={index}
                value={item}
                className={'tags-bar__button tags-bar__button_' + item}
                type='button'
                onClick={this.handleClick}
              >
                {item}
              </button>
            )
          })
        }
      </div>

    )
  }
}

export default TagsBar
