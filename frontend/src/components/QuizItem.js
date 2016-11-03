import React, { Component } from 'react'

export default class QuizItem extends Component {
  render() {
    const { quiz } = this.props

    return (
      <div>
        <div>Q: {quiz.content}</div>
        <div>A: {quiz.correctAnswer}</div>
        <button onClick={() => this.props.deleteQuiz(quiz.id)}>X</button>
      </div>
    )
  }
}
