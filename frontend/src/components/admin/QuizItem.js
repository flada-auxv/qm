import React, { Component } from 'react'
import { Card, FontIcon, FlatButton, IconMenu, IconButton, MenuItem } from 'material-ui'
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';

import EditQuizDialog from './EditQuizDialog'
import sanitizeHTML from '../../sanitizer'

export default class QuizItem extends Component {
  state = {
    dialogOpen: false,
    content: this.props.quiz.content || '',
    correctAnswer: this.props.quiz.correctAnswer || ''
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleDialogClose = () => {
    this.setState({ dialogOpen: false })
  }

  render() {
    return (
      <Card className="quiz-item" style={{ margin: "20px 0" }}>
        <div style={{ display: "flex", padding: 16 }}>
          <div style={{ width: "calc(100% - 50px)", display: "flex", flexDirection: "column", justifyContent: "center" }}>
            <div style={{ display: "flex", marginBottom: 10 }}>
              Q:<span
                  onDoubleClick={this.handleContentDoubleClick}
                  dangerouslySetInnerHTML={sanitizeHTML(this.props.quiz.content)}
                  style={{ wordWrap: "break-word", paddingLeft: 5 }}
                />
            </div>
            <div style={{ display: "flex" }}>
              A:<span
                  onDoubleClick={this.handleCorrectAnswerDoubleClick}
                  dangerouslySetInnerHTML={sanitizeHTML(this.props.quiz.correctAnswer)}
                  style={{ paddingLeft: 5 }}
                />
            </div>
          </div>
          <IconMenu
            iconButtonElement={<IconButton><MoreVertIcon /></IconButton>}
            anchorOrigin={{horizontal: 'right', vertical: 'top'}}
            targetOrigin={{horizontal: 'right', vertical: 'top'}}
          >
            <MenuItem primaryText="Edit" onTouchTap={() => this.setState({ dialogOpen: true })} />
            <MenuItem primaryText="Delete" onTouchTap={() => this.props.deleteQuizAsync(this.props.quiz.id)} />
          </IconMenu>
        </div>
        <EditQuizDialog
          open={this.state.dialogOpen}
          handleClose={this.handleDialogClose}
          editingQuiz={this.props.quiz}
          editQuizAsync={this.props.editQuizAsync}
        />
      </Card>
    )
  }
}
