import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import registerServiceWorker from './registerServiceWorker'
// import './lib/i18n'
import { CookiesProvider } from 'react-cookie'

function Root () {
  return (
    <CookiesProvider>
      <App />
    </CookiesProvider>
  )
}

ReactDOM.render(<Root />, document.getElementById('root'))
registerServiceWorker()
