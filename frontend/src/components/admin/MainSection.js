import React, { Component } from 'react'

import QuizItem from './QuizItem'

export default class MainSection extends Component {
  render() {
    const { quizzes, actions } = this.props

    return (
      <section className="main">
        <div className="quiz-list" style={{ width: "70%", margin: "40px auto" }}>
          {quizzes.map(quiz =>
            <QuizItem key={quiz.id} quiz={quiz} {...actions} />
          )}
        </div>
      </section>
    )
  }
}
