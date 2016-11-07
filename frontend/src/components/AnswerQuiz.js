import React, { Component } from 'react'
import Remarkable from 'remarkable'

export default class AnswerQuiz extends Component {
  state = {
    result: null
  }

  getRawHTML = (text) => {
    const md = new Remarkable({ html: true })
    return { __html: md.render(text) }
  }

  checkAnswer = (text) => {
    // TODO In cases wherein the answer is/contains a number, it should recognise the number as words
    return text === this.props.quiz.correctAnswer
  }

  handleSubmit = e => {
    const text = e.target.value.trim()

    if (e.which === 13) {
      if (this.checkAnswer(text)) {
        this.setState({ result: 'correct' })
      } else {
        this.setState({ result: 'incorrect' })
      }
    }
  }

  resultText = () => {
    let text
    switch (this.state.result) {
      case 'correct':
        text = 'O Correct!!'
        break
      case 'incorrect':
        text = 'X Incorrect!!'
        break
    }
    return text
  }

  render() {
    let element
    let quiz = (
      <div>
        <div dangerouslySetInnerHTML={this.getRawHTML(`Q: ${this.props.quiz.content}`)} />
        A: <input onKeyDown={this.handleSubmit} />
      </div>
    )

    if (this.state.result) {
      element = (
        <div>
          {quiz}
          <div>{this.resultText()}</div>
        </div>
      )
    } else {
      element = (
        <div>
          {quiz}
          <p><button >Check your answer!</button></p>
        </div>
      )
    }

    return element
  }
}
