import React, { Component } from 'react'

export default class QuizItem extends Component {
  state = {
    editing: false,
    content: this.props.quiz.content || '',
    correctAnswer: this.props.quiz.correctAnswer || ''
  }

  handleDoubleClick = () => {
    this.setState({ editing: true })
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleBlur = (e) => {
    this.setState({ editing: false })
    this.props.editQuiz(this.props.quiz.id, this.state.content, this.state.correctAnswer)
  }

  render() {
    const { quiz } = this.props

    let element

    if (this.state.editing) {
      element = (
        <div>
          <div>
            Q: <input name='content' value={this.state.content} onChange={this.handleChange} onBlur={this.handleBlur} />
          </div>
          <div>
            A: <input name='correctAnswer' value={this.state.correctAnswer} onChange={this.handleChange} onBlur={this.handleBlur} />
          </div>
        </div>
      )
    } else {
      element = (
        <div>
          <div onDoubleClick={this.handleDoubleClick}>
            <div>Q: {this.state.content}</div>
            <div>A: {this.state.correctAnswer}</div>
          </div>
          <button onClick={() => this.props.deleteQuiz(quiz.id)}>X</button>
        </div>
      )
    }

    return element
  }
}
