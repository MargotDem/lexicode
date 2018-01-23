import React, { Component } from 'react'

class TagsBar extends Component {
  constructor (props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }

  // when a tags-bar__button is clicked, this function gets the specific tag name and calls the props-passed parent's-state-changing onClick function, passing it the name as argument, so as to display every entry corresponding to said tag:
  handleClick (e) {
    const tag = e.target.value
    this.props.onClick(tag)
  }

  render () {
    return (
      <div className='tags-bar'>

        <button value='basics' className='tags-bar__button tags-bar__button_basics' type='button' onClick={this.handleClick}>basics</button>

        <button value='front' className='tags-bar__button tags-bar__button_front' type='button' onClick={this.handleClick}>front</button>

        <button value='js' className='tags-bar__button tags-bar__button_js' type='button' onClick={this.handleClick}>js</button>

        <button value='css' className='tags-bar__button tags-bar__button_css' type='button' onClick={this.handleClick}>css</button>

        <button value='back' className='tags-bar__button tags-bar__button_back' type='button' onClick={this.handleClick}>back</button>

        <button value='php' className='tags-bar__button tags-bar__button_php' type='button' onClick={this.handleClick}>php</button>

        <button value='python' className='tags-bar__button tags-bar__button_python' type='button' onClick={this.handleClick}>python</button>

        <button value='production' className='tags-bar__button tags-bar__button_production' type='button' onClick={this.handleClick}>production</button>

        <button value='theory' className='tags-bar__button tags-bar__button_theory' type='button' onClick={this.handleClick}>theory</button>

        <button value='ai' className='tags-bar__button tags-bar__button_ai' type='button' onClick={this.handleClick}>ai</button>

        <button value='config' className='tags-bar__button tags-bar__button_config' type='button' onClick={this.handleClick}>config</button>

        <button value='general' className='tags-bar__button tags-bar__button_general' type='button' onClick={this.handleClick}>general</button>

      </div>

    )
  }
}

export default TagsBar
