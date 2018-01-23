import i18n from 'i18next'
import XHR from 'i18next-xhr-backend'
import { reactI18nextModule } from 'react-i18next'

i18n
  .use(XHR)
  .use(reactI18nextModule)
  .init({
    fallbackLng: 'en',
    lng: 'en', // 'en' | 'es'
    initImmediate: true,
    load: 'all',
    backend: {
      loadPath: 'locales/{{lng}}/{{ns}}.json',
      resGetPath: 'locales/{{lng}}/{{ns}}.json'
    },
    getAsync: false,
    debug: true,
    interpolation: {
      escapeValue: false // not needed for react!!
    },

    react: {
      wait: false,
      bindI18n: 'languageChanged loaded',
      bindStore: 'added removed',
      nsMode: 'default'
    }
  })

export default i18n
