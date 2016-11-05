import React, { Component } from 'react'
import Remarkable from 'remarkable'

export default class QuizItem extends Component {
  state = {
    editing: null,
    content: this.props.quiz.content || '',
    correctAnswer: this.props.quiz.correctAnswer || ''
  }

  handleContentDoubleClick = (e) => {
    this.setState({ editing: 'content' })
  }

  handleCorrectAnswerDoubleClick = (e) => {
    this.setState({ editing: 'correctAnswer' })
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleBlur = (e) => {
    this.setState({ editing: null })
    this.props.editQuiz(this.props.quiz.id, this.state.content, this.state.correctAnswer)
  }

  getRawHTML = (text) => {
    const md = new Remarkable({ html: true })
    return { __html: md.render(text) }
  }

  componentDidUpdate = () => {
    switch (this.state.editing) {
      case 'content':
        this.contentInput.focus()
        break
      case 'correctAnswer':
        this.correctAnswerInput.focus()
        break
    }
  }

  render() {
    const { quiz } = this.props

    let element

    if (this.state.editing) {
      element = (
        <div>
          <div>
            <p>Q:
              <input
                ref={(input) => this.contentInput = input}
                name='content'
                value={this.state.content}
                onChange={this.handleChange}
                onBlur={this.handleBlur} />
            </p>
          </div>
          <div>
            <p>A:
              <input
                ref={(input) => this.correctAnswerInput = input}
                name='correctAnswer'
                value={this.state.correctAnswer}
                onChange={this.handleChange}
                onBlur={this.handleBlur} />
            </p>
          </div>
          <button onClick={() => this.props.deleteQuiz(quiz.id)}>X</button>
        </div>
      )
    } else {
      element = (
        <div>
          <div>
            <div onDoubleClick={this.handleContentDoubleClick} dangerouslySetInnerHTML={this.getRawHTML(`Q: ${this.state.content}`)} />
            <div onDoubleClick={this.handleCorrectAnswerDoubleClick} dangerouslySetInnerHTML={this.getRawHTML(`A: ${this.state.correctAnswer}`)} />
          </div>
          <button onClick={() => this.props.deleteQuiz(quiz.id)}>X</button>
        </div>
      )
    }

    return element
  }
}
