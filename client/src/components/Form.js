import React, { Component } from 'react'

import './styles/form.css'

export default class Form extends Component {
  constructor (props) {
    super(props)
    this.state = ({
    })
    this.addLink = this.addLink.bind(this)
    this.renderAddEditForm = this.renderAddEditForm.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.handleKeyPress = this.handleKeyPress.bind(this)
  }

  addLink () {
    let { linkUrl, linkTitle, links } = this.state
    if (links === undefined) {
      links = ''
    }
    links = links + "<a target='_blank' rel='noopener noreferrer' href='" + linkUrl + "'>" + linkTitle + "</a><br>"
    this.setState({
      links: links,
      linkUrl: '',
      linkTitle: ''
    })
  }

  handleChange (e) {
    let field = e.target.name
    let value = e.target.type === 'checkbox' ? e.target.checked : e.target.value
    this.setState({
      [field]: value
    })
  }

  handleKeyPress (event) {
    let { handleSubmit } = this.props
    if (event.key === 'Enter') {
      event.preventDefault()
      handleSubmit(this.state)
    }
  }

  // not sure how or why but have to do this for the pre-filled values to work
  // in edit form (if we get isEdit, name etc directly from props in renderAddEditForm
  // then the inputs are non modifiable, presumably bc value is set, but this
  // way it's modifiable anyway (? why?))
  componentWillReceiveProps (nextProps) {
    this.setState({...nextProps})
  }

  renderAddEditForm () {
    let {
      isEdit,
      name,
      isArticle,
      tag1,
      tag2,
      tag3,
      text,
      translationFr,
      links
    } = this.state

    let { handleSubmit } = this.props

    return (
      <form method='post' className='form'>
        <input
          type='text'
          name='name'
          className='titleInput'
          onChange={this.handleChange}
          value={isEdit && name}
        />

        <input
          type='checkbox'
          name='isArticle'
          className='isArticle'
          onChange={this.handleChange}
          checked={isEdit && isArticle}
        />

        <br />

        <select name='tag1' onChange={this.handleChange}>
          <option value={isEdit ? tag1 : '-'}>{isEdit ? tag1 : '-'}</option>
          <option value='ai'>ai</option>
          <option value='back'>back</option>
          <option value='basics'>basics</option>
          <option value='config'>config</option>
          <option value='css'>css</option>
          <option value='database'>database</option>
          <option value='front'>front</option>
          <option value='general'>general</option>
          <option value='js'>js</option>
          <option value='php'>php</option>
          <option value='production'>production</option>
          <option value='python'>python</option>
          <option value='react'>react</option>
          <option value='theory'>theory</option>
          <option value='-'>-</option>
        </select>

        <select name='tag2' onChange={this.handleChange}>
          <option value={isEdit ? tag2 : '-'}>{isEdit ? tag2 : '-'}</option>
          <option value='ai'>ai</option>
          <option value='back'>back</option>
          <option value='basics'>basics</option>
          <option value='config'>config</option>
          <option value='css'>css</option>
          <option value='database'>database</option>
          <option value='front'>front</option>
          <option value='general'>general</option>
          <option value='js'>js</option>
          <option value='php'>php</option>
          <option value='production'>production</option>
          <option value='python'>python</option>
          <option value='react'>react</option>
          <option value='theory'>theory</option>
          <option value='-'>-</option>
        </select>

        <select name='tag3' onChange={this.handleChange}>
          <option value={isEdit ? tag3 : '-'}>{isEdit ? tag3 : '-'}</option>
          <option value='ai'>ai</option>
          <option value='back'>back</option>
          <option value='basics'>basics</option>
          <option value='config'>config</option>
          <option value='css'>css</option>
          <option value='database'>database</option>
          <option value='front'>front</option>
          <option value='general'>general</option>
          <option value='js'>js</option>
          <option value='php'>php</option>
          <option value='production'>production</option>
          <option value='python'>python</option>
          <option value='react'>react</option>
          <option value='theory'>theory</option>
          <option value='-'>-</option>
        </select>

        <textarea
          name='text'
          placeholder='The text'
          onChange={this.handleChange}
          value={isEdit && text}
        />

        <textarea
          name='translationFr'
          placeholder='The French translation'
          onChange={this.handleChange}
          value={isEdit && translationFr}
        />

        <input
          className='linksInput'
          type='text'
          name='linkUrl'
          onChange={this.handleChange}
          placeholder='Link url'
          value={this.state.linkUrl}
        />

        <input
          className='linksInput'
          type='text'
          name='linkTitle'
          onChange={this.handleChange}
          placeholder='Link title'
          value={this.state.linkTitle}
        />

        <span
          className='addLinkButton'
          onClick={this.addLink}
        >
          +
        </span>

        <textarea
          className='linksTextarea'
          name='links'
          onChange={this.handleChange}
          value={links !== undefined ? links : ''}
        />

        <span className='send-button' onClick={() => { handleSubmit(this.state) }}>Send</span>
      </form>
    )
  }

  renderConnectionForm () {
    let { handleSubmit } = this.props
    return (
      <form method='post' className='form'>
        <input
          type='text'
          name='email'
          onChange={this.handleChange}
          onKeyPress={this.handleKeyPress}
          placeholder='Email'
        />

        <input
          type='password'
          name='password'
          onChange={this.handleChange}
          onKeyPress={this.handleKeyPress}
          placeholder='Password'
        />

        <span className='send-button' onClick={() => { handleSubmit(this.state) }}>Send</span>
      </form>
    )
  }

  render () {
    let { closeForm, isConnection } = this.props
    return (
      <div className='form-container'>
        <div className='form-modal' onClick={closeForm} />
        <div className='form-card'>
          { isConnection ? this.renderConnectionForm() : this.renderAddEditForm() }
        </div>
      </div>
    )
  }
}
