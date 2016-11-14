import React, { Component } from 'react'
import { Card, FontIcon, FlatButton, IconMenu, IconButton, MenuItem } from 'material-ui'
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';

import sanitizeHTML from '../../sanitizer'

export default class QuizItem extends Component {
  state = {
    editing: null,
    content: this.props.quiz.content || '',
    correctAnswer: this.props.quiz.correctAnswer || ''
  }

  handleContentDoubleClick = (e) => {
    this.setState({ editing: 'content' })
  }

  handleCorrectAnswerDoubleClick = (e) => {
    this.setState({ editing: 'correctAnswer' })
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleBlur = (e) => {
    this.setState({ editing: null })
    this.props.editQuizAsync(this.props.quiz.id, this.state.content, this.state.correctAnswer)
  }

  componentDidUpdate = () => {
    switch (this.state.editing) {
      case 'content':
        this.contentInput.focus()
        break
      case 'correctAnswer':
        this.correctAnswerInput.focus()
        break
    }
  }

  render() {
    const { quiz } = this.props

    let element

    if (this.state.editing) {
      element = (
        <div>
          <div>
            <p>Q:
              <input
                ref={(input) => this.contentInput = input}
                name='content'
                value={this.state.content}
                onChange={this.handleChange}
                onBlur={this.handleBlur} />
            </p>
          </div>
          <div>
            <p>A:
              <input
                ref={(input) => this.correctAnswerInput = input}
                name='correctAnswer'
                value={this.state.correctAnswer}
                onChange={this.handleChange}
                onBlur={this.handleBlur} />
            </p>
          </div>
          <button onClick={() => this.props.deleteQuizAsync(quiz.id)}>X</button>
        </div>
      )
    } else {
      element = (
        <Card className="quiz-item" style={{ margin: "20px 0" }}>
          <div style={{ display: "flex", padding: 16 }}>
            <div style={{ width: "calc(100% - 50px)", display: "flex", flexDirection: "column", justifyContent: "center" }}>
              <div style={{ display: "flex", marginBottom: 10 }}>
                Q:<span
                    onDoubleClick={this.handleContentDoubleClick}
                    dangerouslySetInnerHTML={sanitizeHTML(this.state.content)}
                    style={{ wordWrap: "break-word", paddingLeft: 5 }}
                  />
              </div>
              <div style={{ display: "flex" }}>
                A:<span
                    onDoubleClick={this.handleCorrectAnswerDoubleClick}
                    dangerouslySetInnerHTML={sanitizeHTML(this.state.correctAnswer)}
                    style={{ paddingLeft: 5 }}
                  />
              </div>
            </div>
            <IconMenu
              iconButtonElement={<IconButton><MoreVertIcon /></IconButton>}
              anchorOrigin={{horizontal: 'right', vertical: 'top'}}
              targetOrigin={{horizontal: 'right', vertical: 'top'}}
            >
              <MenuItem primaryText="Edit" onTouchTap={() => console.log('TODO') } />
              <MenuItem primaryText="Delete" onTouchTap={() => this.props.deleteQuizAsync(quiz.id)} />
            </IconMenu>
          </div>
        </Card>
      )
    }

    return element
  }
}
