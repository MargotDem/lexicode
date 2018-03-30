import React, { Component } from 'react'

import axios from 'axios'

import './styles/addForm.css'

export default class AddForm extends Component {
  constructor (props) {
    super(props)
    this.state = ({
    })
    this.handleChange = this.handleChange.bind(this)
    this.handleAdd = this.handleAdd.bind(this)
  }

  handleAdd () {
    console.log('add stuff')
    let entry = this.state
    axios.post('/api/entries', entry)
      .then(response => {
        console.log(response)
      })
      .catch(error => {
        console.log(error)
      })
  }

  handleChange (e) {
    let field = e.target.name
    let value = e.target.type === 'checkbox' ? e.target.checked : e.target.value
    this.setState({
      [field]: value
    })
  }

  render () {
    return (
      <div className='add-form-container'>
        <div className='add-form-card'>
          <form method='post' className='add-form'>
            <input type='text' placeholder='Title' name='name' onChange={this.handleChange} />

            <input type='checkbox' name='isArticle' onChange={this.handleChange} />

            <select name='tag1' onChange={this.handleChange}>
              <option value='' />
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
              <option value='' />
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
              <option value='' />
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

            <textarea name='text' placeholder='The text' onChange={this.handleChange} />

            <textarea name='translationFr' placeholder='The French translation' onChange={this.handleChange} />

            <input type='text' placeholder='Links' name='links' onChange={this.handleChange} />

            <span className='add-button' onClick={() => { this.handleAdd() }}>Send</span>
          </form>
        </div>
      </div>
    )
  }
}
