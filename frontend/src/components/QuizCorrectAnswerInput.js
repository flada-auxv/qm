import React, { Component } from 'react'

export default class QuizCorrectAnswerInput extends Component {
  handleChange = e => {
    this.props.onCorrectAnswerChange(e.target.value)
  }

  render() {
    return (
      <input value={this.props.correctAnswer} onChange={this.handleChange} />
    )
  }
}
