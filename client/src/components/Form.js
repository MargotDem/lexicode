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
  }
  addLink () {
    let { linkUrl, linkTitle } = this.state
    console.log(linkUrl)
  }

  handleChange (e) {
    let field = e.target.name
    let value = e.target.type === 'checkbox' ? e.target.checked : e.target.value
    this.setState({
      [field]: value
    })
  }

  componentWillReceiveProps (nextProps) {
    let {
      isEdit,
      id,
      name,
      isArticle,
      tag1,
      tag2,
      tag3,
      text,
      translationFr,
      links
    } = nextProps
    this.setState({
      isEdit: isEdit,
      id: id,
      name: name,
      isArticle: isArticle,
      tag1: tag1,
      tag2: tag2,
      tag3: tag3,
      text: text,
      translationFr: translationFr,
      links: links
    })
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
          onChange={this.handleChange}
          value={isEdit && name}
        />

        <input
          type='checkbox'
          name='isArticle'
          onChange={this.handleChange}
          checked={isEdit && isArticle}
        />

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
        />

        <input
          className='linksInput'
          type='text'
          name='linkTitle'
          onChange={this.handleChange}
          placeholder='Link title'
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
          value={isEdit && links}
          defaultValue="<a target='_blank' rel='noopener noreferrer' href=''></a><br>"
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
          placeholder='Email'
        />

        <input
          type='password'
          name='password'
          onChange={this.handleChange}
          placeholder='Password'
        />

        <span className='send-button' onClick={() => { handleSubmit(this.state) }}>Send</span>
      </form>
    )
  }

  render () {
    let { closeForm, isConnectionForm } = this.props
    return (
      <div className='form-container'>
        <div className='form-modal' onClick={closeForm} />
        <div className='form-card'>
          { isConnectionForm ? this.renderConnectionForm() : this.renderAddEditForm() }
        </div>
      </div>
    )
  }
}
