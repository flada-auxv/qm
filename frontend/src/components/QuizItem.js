import React, { Component } from 'react'
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
      <li onClick={this.handleClick} dangerouslySetInnerHTML={this.getRawHTML(this.props.quiz.content)} />
    )
  }
}
