import React, { Component } from 'react'

import axios from 'axios'

import './styles/addForm.css'

export default class EditForm extends Component {
  constructor (props) {
    super(props)
    this.state = ({
    })
    this.handleChange = this.handleChange.bind(this)
    this.handleEdit = this.handleEdit.bind(this)
    this.handleCloseClick = this.handleCloseClick.bind(this)
  }

  componentWillMount () {
    axios.get('/api/entries/' + this.props.entry)
      .then(entry => {
        let entryData = entry.data[0]
        this.setState({
          id: entryData['id'],
          name: entryData['name'],
          isArticle: entryData['isArticle'],
          tag1: entryData['tag_1'],
          tag2: entryData['tag_2'],
          tag3: entryData['tag_3'],
          text: entryData['text'],
          translationFr: entryData['translation_fr'],
          links: entryData['links']
        })
      })
      .catch(error => {
        console.log(error)
      })
  }

  handleEdit () {
    let entry = this.state
    let { id } = this.state
    console.log(entry)
    console.log(id)
    axios.put('/api/entries/' + id, entry)
      .then(response => {
        console.log(response)
      })
      .catch(error => {
        console.log(error)
      })
    window.location.reload()
  }

  handleChange (e) {
    let field = e.target.name
    let value = e.target.type === 'checkbox' ? e.target.checked : e.target.value
    this.setState({
      [field]: value
    })
  }

  handleCloseClick () {
    this.props.closeForm()
  }

  render () {
    let { name, isArticle, tag1, tag2, tag3, text, translationFr, links } = this.state
    return (
      <div className='add-form-container'>
        <div className='add-form-modal' onClick={this.handleCloseClick} />
        <div className='add-form-card'>
          <form method='post' className='add-form'>
            <input
              type='text'
              name='name'
              onChange={this.handleChange}
              value={name}
            />

            <input type='checkbox' name='isArticle' onChange={this.handleChange} checked={isArticle} />

            <select name='tag1' onChange={this.handleChange}>
              <option value={tag1}>{tag1}</option>
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
            </select>

            <select name='tag2' onChange={this.handleChange}>
              <option value={tag2}>{tag2}</option>
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
            </select>

            <select name='tag3' onChange={this.handleChange}>
              <option value={tag3}>{tag3}</option>
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
            </select>

            <textarea name='text' placeholder='The text' onChange={this.handleChange} value={text} />

            <textarea name='translationFr' placeholder='The French translation' onChange={this.handleChange} value={translationFr} />

            <textarea
              className='linksTextarea'
              name='links'
              onChange={this.handleChange}
              value={links}
            />

            <span className='send-button' onClick={() => { this.handleEdit() }}>Send</span>
          </form>
        </div>
      </div>
    )
  }
}
