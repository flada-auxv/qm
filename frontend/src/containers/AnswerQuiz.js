import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import writtenNumber from 'written-number'
import { Card, CardHeader, CardText, CardActions, TextField, FlatButton } from 'material-ui';

import sanitizeHTML from '../sanitizer'

import CheckAnswer from '../components/CheckAnswer'
import Result from '../components/Result'
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

  render() {
    if (this.props.quiz === null) {
      return <NotFound />
    }

    return (
      <Card>
        <CardHeader>
          <div className="question" dangerouslySetInnerHTML={sanitizeHTML(this.props.quiz.content)} />
        </CardHeader>
        <CardText>
          <TextField
            hintText="your answer"
            className= "answer"
            value={this.state.answer}
            onChange={this.handleInputChange}
            onKeyDown={this.handleSubmit} />
        </CardText>
        <CardActions>
          <FlatButton className="checkAnswer" label={"Check the answer!"} onClick={this.handleClick} />
          <Result result={this.state.result} />
        </CardActions>
      </Card>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return { quiz: state.pickedQuiz || state.quizzes.find(elem => elem.id === parseInt(ownProps.params.quizId, 10)) || null }
}

export default connect(
  mapStateToProps
)(AnswerQuiz)
