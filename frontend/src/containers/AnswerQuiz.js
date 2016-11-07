import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Remarkable from 'remarkable'

import NotFound from '../components/NotFound'

class AnswerQuiz extends Component {
  state = {
    result: null,
    answer: ''
  }

  getRawHTML = (text) => {
    const md = new Remarkable({ html: true })
    return { __html: md.render(text) }
  }

  checkAnswer = (text) => {
    // TODO In cases wherein the answer is/contains a number, it should recognise the number as words
    if (text === this.props.quiz.correctAnswer) {
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
        <div dangerouslySetInnerHTML={this.getRawHTML(`Q: ${this.props.quiz.content}`)} />
        A: <input value={this.state.answer} onChange={this.handleInputChange} onKeyDown={this.handleSubmit} />
      </div>
    )

    if (this.state.result) {
      element = (
        <div>
          {quiz}
          <p><button onClick={this.handleClick}>Check your answer!</button></p>
          <div>{this.resultText()}</div>
        </div>
      )
    } else {
      element = (
        <div>
          {quiz}
          <p><button onClick={this.handleClick}>Check your answer!</button></p>
        </div>
      )
    }

    return element
  }
}

const mapStateToProps = (state, ownProps) => (
  { quiz: state.pickedQuiz || state.quizzes.find(elem => elem.id === parseInt(ownProps.params.quizId, 10)) || null }
)

export default connect(
  mapStateToProps
)(AnswerQuiz)
