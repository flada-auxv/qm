import React, { Component } from 'react'
import { push } from 'react-router-redux'
import Remarkable from 'remarkable'

export default class QuizItem extends Component {
  getRawHTML = (text) => {
    const md = new Remarkable({ html: true })
    return { __html: md.render(text) }
  }

  handleClick = () => {
    this.props.answerQuiz(this.props.quiz)
  }

  render() {
    return (
      <div>
        <div onClick={this.handleClick} dangerouslySetInnerHTML={this.getRawHTML(`Q: ${this.props.quiz.content}`)} />
      </div>
    )
  }
}
