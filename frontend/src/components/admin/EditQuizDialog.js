import React, { Component } from 'react'
import { Dialog, FlatButton, TextField } from 'material-ui'

export default class EditQuizDialog extends Component {
  state = {
    content: this.props.editingQuiz.content,
    correctAnswer: this.props.editingQuiz.correctAnswer
  }

  handleSubmit = () => {
    this.props.editQuizAsync(this.props.editingQuiz.id, this.state.content, this.state.correctAnswer)
    this.props.handleClose()
  }

  handleCancel = () => {
    this.props.handleClose()
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  render() {
    const actions = [
      <FlatButton
        label="Cancel"
        primary={true}
        onTouchTap={this.handleCancel}
      />,
      <FlatButton
        label="Submit"
        primary={true}
        keyboardFocused={true}
        onTouchTap={this.handleSubmit}
      />,
    ]

    return (
      <div className="edit-quiz-dialog" onClick={this.handleOpen}>
        <Dialog
          title="Edit quiz"
          actions={actions}
          open={this.props.open}
          onRequestClose={this.props.handleClose}
        >
          <div>
            <TextField
              floatingLabelText="Quiz content"
              floatingLabelFixed={true}
              hintText="You can use HTML tags and their style attributes."
              multiLine={true}
              onChange={this.handleChange}
              name="content"
              value={this.state.content}
              style={{ width: "100%" }}
            />
          </div>
          <div>
            <TextField
              floatingLabelText="Quiz answer"
              floatingLabelFixed={true}
              hintText="If it contains a number, it recognise the number as words."
              multiLine={true}
              onChange={this.handleChange}
              name="correctAnswer"
              value={this.state.correctAnswer}
              style={{ width: "100%" }}
            />
          </div>
        </Dialog>
      </div>
    )
  }
}
