import React, { Component } from 'react'

import QuizItem from './QuizItem'
import AddQuizItem from './AddQuizItem'

export default class MainSection extends Component {
  render() {
    const { quizes, actions } = this.props

    return (
      <section className='main'>
        <h1>QuizMaster</h1>
        <AddQuizItem addQuizAsync={actions.addQuizAsync} />
        <div className='quiz-list'>
          {quizes.map(quiz =>
            <QuizItem key={quiz.id} quiz={quiz} {...actions} />
          )}
        </div>
      </section>
    )
  }
}
