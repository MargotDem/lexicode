import React, { Component } from 'react'

import i18n from '../lib/i18n'

import './styles/togglelanguage.css'

export default class ToggleLanguage extends Component {
  constructor (props) {
    super(props)
    this.state = {
      en: true
    }
    this.changeLg = this.changeLg.bind(this)
  }

  changeLg () {
    let isEn = this.state.en
    let lg = isEn === true ? 'fr' : 'en'
    i18n.changeLanguage(lg)
    this.setState({
      en: !isEn
    })
  }

  render () {
    let isFr = this.state.en === false ? ' toggle-language__button_on' : ''
    let isEn = this.state.en === true ? ' toggle-language__button_on' : ''
    return (
      <div className='toggle-language'>
        <div className={'toggle-language__button' + isEn} onClick={this.changeLg}>
          EN
        </div>
        <div className={'toggle-language__button' + isFr} onClick={this.changeLg}>
          FR
        </div>
      </div>
    )
  }
}
