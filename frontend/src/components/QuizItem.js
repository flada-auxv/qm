import React, { Component } from 'react'

export default class QuizItem extends Component {
  render() {
    return (
      <div>
        <div>Q: {this.props.quiz.content}</div>
        <div>A: {this.props.quiz.correctAnswer}</div>
      </div>
    )
  }
}
