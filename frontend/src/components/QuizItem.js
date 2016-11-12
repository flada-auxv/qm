import React, { Component } from 'react'
import { ListItem, FontIcon } from 'material-ui'

import sanitizeHTML from '../sanitizer'

export default class QuizItem extends Component {
  handleClick = () => {
    this.props.answerQuiz(this.props.quiz)
  }

  render() {
    sanitizeHTML(this.props.quiz.content)

    const text = (
      <span>
        <FontIcon className="fa fa-question" style={{ marginRight: 15 }}/>
        <span className="question" dangerouslySetInnerHTML={sanitizeHTML(this.props.quiz.content)} />
      </span>
    )

    return (
      <ListItem primaryText={text} onClick={this.handleClick} />
    )
  }
}
