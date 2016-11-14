import React, { Component } from 'react'

import QuizItem from './QuizItem'
import AddQuizItem from './AddQuizItem'

export default class MainSection extends Component {
  render() {
    const { quizzes, actions } = this.props

    return (
      <section className='main'>
        <AddQuizItem addQuizAsync={actions.addQuizAsync} />
        <div className='quiz-list'>
          {quizzes.map(quiz =>
            <QuizItem key={quiz.id} quiz={quiz} {...actions} />
          )}
        </div>
      </section>
    )
  }
}
