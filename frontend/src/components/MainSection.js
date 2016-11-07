import React, { Component } from 'react'

import QuizItem from './QuizItem'

export default class MainSection extends Component {
  getQuiz = (id) => {
    return this.props.quizzes.find(elem => elem.id === id)
  }

  render() {
    const { quizzes, actions } = this.props

    return (
      <section className='main'>
        <h1>QuizMaster</h1>
        <div className='quiz-list'>
          {quizzes.map(quiz =>
            <QuizItem key={quiz.id} quiz={quiz} answerQuiz={actions.answerQuiz} />
          )}
        </div>
      </section>
    )
  }
}
