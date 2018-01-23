import React, { Component } from 'react'

import { I18n } from 'react-i18next'

/*
The BaseContainer component implements the i18n logic from react-i18next
Every component rendering text that needs translation should extend BaseContainer like so:

class TranslatableComponent extends BaseContainer {
  renderMe(t) {
    return (
      <div>
        {t('nameOfComponent.keyName')}
      </div>
    )
  }
}

Where nameOfComponent is an object in the public/locales/{language}/translation.json files,
and keyName is the key of nameOfComponent that references the translated text to be rendered.
*/

export default class BaseContainer extends Component {
  render () {
    return (
      <I18n>
        {
        (t) => {
          return (this.renderMe(t))
        }
      }
      </I18n>
    )
  }
}
