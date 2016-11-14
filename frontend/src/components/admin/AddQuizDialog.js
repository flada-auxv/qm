import React, { Component } from 'react'
import { Dialog, FlatButton, TextField } from 'material-ui'

export default class AddQuizDialog extends Component {
  state = {
    open: false,
    content: '',
    correctAnswer: ''
  }

  handleOpen = () => {
    this.setState({ open: true });
  }

  handleSubmit = () => {
    this.props.addQuizAsync(this.state.content, this.state.correctAnswer)
    this.setState({ open: false, content: '', correctAnswer: '' });
  }

  handleCancel = () => {
    this.setState({ open: false, content: '', correctAnswer: '' });
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
      <div className="add-quiz-dialog">
        <FlatButton label="Add new quiz" onTouchTap={this.handleOpen} />
        <Dialog
          title="Add new quiz"
          actions={actions}
          modal={false}
          open={this.state.open}
          onRequestClose={this.handleClose}
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
