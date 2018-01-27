import React, { Component } from 'react'

import i18n from '../lib/i18n'

import './styles/togglelanguage.css'

export default class ToggleLanguage extends Component {
  constructor (props) {
    super(props)
    this.state = {
      en: true
    }
    this.changeEn = this.changeEn.bind(this)
    this.changeFr = this.changeFr.bind(this)
  }

  changeEn () {
    i18n.changeLanguage('en')
    this.setState({
      en: true
    })
  }

  changeFr () {
    i18n.changeLanguage('fr')
    this.setState({
      en: false
    })
  }

  render () {
    let isFr = this.state.en === false ? ' toggle-language__button_on' : ''
    let isEn = this.state.en === true ? ' toggle-language__button_on' : ''
    return (
      <div className='toggle-language'>
        <div className={'toggle-language__button' + isEn} onClick={this.changeEn}>
          EN
        </div>
        <div className={'toggle-language__button' + isFr} onClick={this.changeFr}>
          FR
        </div>
      </div>
    )
  }
}
