import React, { Component } from 'react'

import './styles/form.css'

export default class Form extends Component {
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
      links,
      handleChange,
      handleSubmit
    } = this.props

    return (
      <form method='post' className='form'>
        <input
          type='text'
          name='name'
          onChange={handleChange}
          placeholder='Title'
          value={isEdit && name}
        />

        <input
          type='checkbox'
          name='isArticle'
          onChange={handleChange}
          checked={isEdit && isArticle}
        />

        <select name='tag1' onChange={handleChange}>
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

        <select name='tag2' onChange={handleChange}>
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

        <select name='tag3' onChange={handleChange}>
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
          onChange={handleChange}
          value={isEdit && text}
        />

        <textarea
          name='translationFr'
          placeholder='The French translation'
          onChange={handleChange}
          value={isEdit && translationFr}
        />

        <textarea
          className='linksTextarea'
          name='links'
          onChange={handleChange}
          value={isEdit && links}
          defaultValue="<a target='_blank' rel='noopener noreferrer' href=''></a><br>"
        />

        <span className='send-button' onClick={() => { handleSubmit() }}>Send</span>
      </form>
    )
  }

  renderConnectionForm () {
    let { handleChange, handleSubmit } = this.props
    return (
      <form method='post' className='form'>
        <input
          type='text'
          name='email'
          onChange={handleChange}
          placeholder='Email'
        />

        <input
          type='password'
          name='password'
          onChange={handleChange}
          placeholder='Password'
        />

        <span className='send-button' onClick={() => { handleSubmit() }}>Send</span>
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
