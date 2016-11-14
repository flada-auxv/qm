import React from 'react'
import { List } from 'material-ui'

import QuizItem from './QuizItem'

export default function Home(props) {
  return (
    <section className="main">
      <List className="quiz-list">
        {props.quizzes.map(quiz =>
          <QuizItem key={quiz.id} quiz={quiz} answerQuiz={props.actions.answerQuiz} />
        )}
      </List>
    </section>
  )
}
