import React, { Component } from 'react'
import sanitizeHTML from '../sanitizer'

export default class QuizItem extends Component {
  handleClick = () => {
    this.props.answerQuiz(this.props.quiz)
  }

  render() {
    return (
      <li onClick={this.handleClick} dangerouslySetInnerHTML={sanitizeHTML(this.props.quiz.content)} />
    )
  }
}
