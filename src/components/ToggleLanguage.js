import React, { Component } from 'react'

import i18n from '../lib/i18n'

import './styles/togglelanguage.css'

export default class ToggleLanguage extends Component {
  constructor (props) {
    super(props)
    this.state = {
      en: ' toggle-language__button_on',
      fr: ''
    }
    this.changeEn = this.changeEn.bind(this)
    this.changeFr = this.changeFr.bind(this)
  }

  changeEn () {
    i18n.changeLanguage('en')
    this.setState({
      en: ' toggle-language__button_on',
      fr: ''
    })
  }

  changeFr () {
    i18n.changeLanguage('fr')
    this.setState({
      fr: ' toggle-language__button_on',
      en: ''
    })
  }

  render () {
    return (
      <div className='toggle-language'>
        <div className={'toggle-language__button' + this.state.en} onClick={this.changeEn}>
          EN
        </div>
        <div className={'toggle-language__button' + this.state.fr} onClick={this.changeFr}>
          FR
        </div>
      </div>
    )
  }
}
