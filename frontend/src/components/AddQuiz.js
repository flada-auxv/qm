import React, { Component } from 'react'

export default class AddQuiz extends Component {
  state = {
    content: this.props.content || '',
    correctAnswer: this.props.correctAnswer || ''
  }

  handleSave = () => {
    this.props.addQuiz(this.state.content, this.state.correctAnswer)
    this.setState({ content: '', correctAnswer: '' })
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  render() {
    return (
      <section className='add-quiz'>
        <div><p>Q: <input name='content' value={this.state.content} onChange={this.handleChange} /></p></div>
        <div><p>A: <input name='correctAnswer' value={this.state.correctAnswer} onChange={this.handleChange} /></p></div>
        <button onClick={this.handleSave}>New Quiz</button>
      </section>
    )
  }
}
