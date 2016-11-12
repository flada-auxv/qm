import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import writtenNumber from 'written-number'
import { Card, CardHeader, CardText, CardActions, TextField, FlatButton, Dialog } from 'material-ui';

import sanitizeHTML from '../sanitizer'

import Result from '../components/Result'
import NotFound from '../components/NotFound'

export class AnswerQuiz extends Component {
  state = {
    result: null,
    answer: '',
    dialogOpen: false
  }

  checkAnswer = (text) => {
    const correctAnswer = this.props.quiz.correctAnswer
    const replacedText = text.replace(/\d+/g, match => writtenNumber(match))

    if (text === correctAnswer || replacedText === correctAnswer) {
      this.setState({ result: 'correct', dialogOpen: true })
    } else {
      this.setState({ result: 'incorrect', dialogOpen: true })
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
    if (this.props.quiz === null) {
      return <NotFound />
    }

    const dialog = (
      <Dialog
        title="Result"
        actions={<FlatButton label="Close" primary={true} onTouchTap={this.handleClose} />}
        modal={false}
        open={this.state.dialogOpen}
        onRequestClose={this.handleClose}
      >
        <Result result={this.state.result} />
      </Dialog>
    )

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
        </CardActions>
        {dialog}
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
