import React, { Component } from 'react'
import writtenNumber from 'written-number'
import { Card, CardHeader, CardText, CardActions, TextField, FlatButton, Dialog } from 'material-ui'

import sanitizeHTML from '../sanitizer'

import Result from './Result'
import NotFound from './NotFound'

export default class AnswerQuiz extends Component {
  state = {
    result: null,
    answer: '',
    dialogOpen: false
  }

  checkAnswer = (text) => {
    const correctAnswer = this.props.pickedQuiz.correctAnswer
    const replacedText = text.replace(/\d+/g, match => writtenNumber(match))

    if (text === correctAnswer || replacedText === correctAnswer) {
      this.setState({ result: 'correct', dialogOpen: true })
      setTimeout(() => this.setState({ dialogOpen: false }), 2000) // FIXME: Is there a better way?
    } else {
      this.setState({ result: 'incorrect', dialogOpen: true })
      setTimeout(() => this.setState({ dialogOpen: false }), 2000)
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

  handleClose = () => {
    this.setState({ dialogOpen: false });
  };

  render() {
    if (this.props.pickedQuiz === null) {
      return <NotFound />
    }

    return (
      <Card>
        <CardHeader>
          <div className="question" dangerouslySetInnerHTML={sanitizeHTML(this.props.pickedQuiz.content)} />
        </CardHeader>
        <CardText>
          <TextField
            hintText="your answer"
            className="answer"
            value={this.state.answer}
            onChange={this.handleInputChange}
            onKeyDown={this.handleSubmit}
            autoFocus={true}
          />
        </CardText>
        <CardActions>
          <FlatButton className="checkAnswer" label={"Check the answer!"} onClick={this.handleClick} />
        </CardActions>
        <Dialog
          className="resultDialog"
          title="Result"
          modal={false}
          open={this.state.dialogOpen}
          onRequestClose={this.handleClose}
        >
          <Result result={this.state.result} />
        </Dialog>
      </Card>
    )
  }
}
