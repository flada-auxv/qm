import React, { Component } from 'react'
import { Card, CardText } from 'material-ui';

import sanitizeHTML from '../sanitizer'

export default class QuizItem extends Component {
  handleClick = () => {
    this.props.answerQuiz(this.props.quiz)
  }

  render() {
    return (
      <Card onClick={this.handleClick}>
        <CardText dangerouslySetInnerHTML={sanitizeHTML(this.props.quiz.content)} />
      </Card>
    )
  }
}
