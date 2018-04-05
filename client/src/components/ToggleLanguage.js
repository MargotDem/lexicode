import React, { Component } from 'react'

import './styles/togglelanguage.css'

export default class ToggleLanguage extends Component {
  render () {
    let { language, changeLanguage } = this.props
    return (
      <div className='toggle-language'>
        <div className={'toggle-language__button ' + (language === 'en' && 'toggle-language__button_on')} onClick={() => { changeLanguage('en') }}>
          EN
        </div>
        <div className={'toggle-language__button ' + (language === 'fr' && 'toggle-language__button_on')} onClick={() => { changeLanguage('fr') }}>
          FR
        </div>
      </div>
    )
  }
}
