import React, { Component } from 'react'

class AlphabetBar extends Component {
  render () {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz'

    return (
      <div className='alphabet-bar'>
        {
          alphabet.split('').map((item, index) => {
            let url = '/#'.concat(item)
            return (
              <a href={url}>{item.toUpperCase()}</a>
            )
          }
        )
        }
      </div>
    )
  }
}

export default AlphabetBar
