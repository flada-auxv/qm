import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import writtenNumber from 'written-number'

import sanitizeHTML from '../sanitizer'

import NotFound from '../components/NotFound'

export class AnswerQuiz extends Component {
  state = {
    result: null,
    answer: ''
  }

  checkAnswer = (text) => {
    const correctAnswer = this.props.quiz.correctAnswer
    const replacedText = text.replace(/\d+/g, match => writtenNumber(match))

    if (text === correctAnswer || replacedText === correctAnswer) {
      this.setState({ result: 'correct' })
    } else {
      this.setState({ result: 'incorrect' })
    }
  }

  handleInputChange = e => {
    this.setState({ answer: e.target.value })
  }

  handleSubmit = e => {
    if (e.which === 13) {
      this.checkAnswer(e.target.value)
    }
  }

  handleClick = e => {
    this.checkAnswer(this.state.answer)
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
    if (this.props.quiz === null) {
      return <NotFound />
    }

    let element
    let quiz = (
      <div>
        <div className="question" dangerouslySetInnerHTML={sanitizeHTML(`Q: ${this.props.quiz.content}`)} />
        A: <input className= "answer" value={this.state.answer} onChange={this.handleInputChange} onKeyDown={this.handleSubmit} />
      </div>
    )

    if (this.state.result) {
      element = (
        <div>
          {quiz}
          <p><button onClick={this.handleClick}>Check your answer!</button></p>
          <div className="result">{this.resultText()}</div>
        </div>
      )
    } else {
      element = (
        <div>
          {quiz}
          <p><button className="checkAnswer" onClick={this.handleClick}>Check your answer!</button></p>
        </div>
      )
    }

    return element
  }
}

const mapStateToProps = (state, ownProps) => {
  return { quiz: state.pickedQuiz || state.quizzes.find(elem => elem.id === parseInt(ownProps.params.quizId, 10)) || null }
}

export default connect(
  mapStateToProps
)(AnswerQuiz)
