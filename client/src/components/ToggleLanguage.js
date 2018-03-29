import React, { Component } from 'react'

import './styles/togglelanguage.css'

export default class ToggleLanguage extends Component {
  constructor (props) {
    super(props)
    this.state = {
      en: true
    }
    this.changeLanguage = this.changeLanguage.bind(this)
  }

  changeLanguage (language) {
    this.props.changeLanguage(language)
  }

  render () {
    let isFr = this.props.language !== 'en' ? ' toggle-language__button_on' : ''
    let isEn = this.props.language === 'en' ? ' toggle-language__button_on' : ''
    return (
      <div className='toggle-language'>
        <div className={'toggle-language__button' + isEn} onClick={() => { this.changeLanguage('en') }}>
          EN
        </div>
        <div className={'toggle-language__button' + isFr} onClick={() => { this.changeLanguage('fr') }}>
          FR
        </div>
      </div>
    )
  }
}
