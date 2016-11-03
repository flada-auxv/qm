import React, { Component } from 'react'

export default class QuizContentInput extends Component {
  handleChange = e => {
    this.props.onContentChange(e.target.value)
  }

  render() {
    return (
      <textarea value={this.props.content} onChange={this.handleChange} />
    )
  }
}
