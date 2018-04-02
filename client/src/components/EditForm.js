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

  componentDidMount () {
    console.log('edit form did mount' + this.props.entry)
    axios.get('/api/entries/' + this.props.entry)
      .then(entry => {
        this.setState({
          entryResult: entry.data
        })
      })
      .catch(error => {
        console.log(error)
      })
  }

  handleEdit () {
    let entry = this.state
    console.log(entry)
    // axios.post('/api/entries', entry)
    //   .then(response => {
    //     console.log(response)
    //   })
    //   .catch(error => {
    //     console.log(error)
    //   })
    // window.location.reload()
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
    console.log(this.state.entryResult)
    return (
      <div className='add-form-container'>
        <div className='add-form-modal' onClick={this.handleCloseClick} />
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

            <textarea
              className='linksTextarea'
              name='links'
              onChange={this.handleChange}
              defaultValue="<a target='_blank' rel='noopener noreferrer' href=''></a><br>"
            />

            <span className='send-button' onClick={() => { this.handleEdit() }}>Send</span>
          </form>
        </div>
      </div>
    )
  }
}
