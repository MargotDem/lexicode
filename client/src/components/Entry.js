import React, { Component } from 'react'
import renderHTML from 'react-render-html'
import axios from 'axios'
import { withCookies } from 'react-cookie'

import './styles/entry.css'

class Entry extends Component {
  constructor (props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }

  /* when a tags-bar__button is clicked, this function gets the specific tag name
  and calls the props-passed grand-parent's-state-changing onClick function,
  passing it the name as argument, so as to display every entry corresponding to
  said tag: */
  handleClick (e) {
    const tag = e.target.value
    this.props.onClick(tag)
  }

  handleDelete (id) {
    axios.delete('/api/entries/' + id)
      .then(response => {
        console.log(response)
      })
      .catch(error => {
        console.log(error)
      })
      .then(() => {
        this.props.fetchEntries()
      })
  }

  confirmDelete (id) {
    if (window.confirm('Delete this entry ?')) {
      this.handleDelete(id)
    }
  }

  render () {
    const { cookies } = this.props
    let isAdminLogged = cookies.get('admin') === 'true'

    let { id, tags, title, text, links, art, openForm } = this.props

    const isArt = art ? ' entry__text_lightgray' : ''

    return (
      <div className='entry' id={title[0]}>

        <div className='entry__header' id={title}>
          <div className='entry__title'>
            {title}
            {
              isAdminLogged && <span className='delete-button' onClick={() => { this.confirmDelete(id) }}>
                delete
              </span>
            }
          </div>
          <div className='entry__tags'>
            {
              tags.map(tag => {
                if (tag !== '-') {
                  return (
                    <button
                      key={tag}
                      value={tag}
                      className={'tags-bar__button tags-bar__button_' + tag}
                      type='button'
                      onClick={this.handleClick}
                    >
                      {tag}
                    </button>
                  )
                }
                return null
              })
            }
          </div>
        </div>

        <div className={'entry__text' + isArt}>
          {renderHTML(text)}
          {
            isAdminLogged && <span className='edit-button' onClick={() => { openForm('showEditForm', true, id) }}>
              edit
            </span>
          }
        </div>

        <div className='entry__links'>
          {renderHTML(links)}
        </div>

      </div>
    )
  }
}

export default withCookies(Entry)
