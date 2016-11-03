import React, { Component } from 'react'

import QuizContentInput from './QuizContentInput'
import QuizCorrectAnswerInput from './QuizCorrectAnswerInput'

export default class AddQuiz extends Component {
  state = {
    content: this.props.content || '',
    correctAnswer: this.props.correctAnswer || ''
  }

  handleSave = () => {
    this.props.addQuiz(this.state.content, this.state.correctAnswer)
    this.setState({ content: '', correctAnswer: '' })
  }

  handleContentChange = (content) => {
    this.setState({ content: content })
  }

  handleCorrectAnswerChange = (correctAnswer) => {
    this.setState({ correctAnswer: correctAnswer })
  }

  render() {
    return (
      <section className='add-quiz'>
        <QuizContentInput content={this.state.content} onContentChange={this.handleContentChange}/>
        <QuizCorrectAnswerInput correctAnswer={this.state.correctAnswer} onCorrectAnswerChange={this.handleCorrectAnswerChange} />
        <button onClick={this.handleSave}>New Quiz</button>
      </section>
    )
  }
}
