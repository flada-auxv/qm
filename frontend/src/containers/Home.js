import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import * as QuizActions from '../actions'
import QuizItem from '../components/QuizItem'

class Home extends Component {
  render() {
    const { quizzes, actions } = this.props

    return (
      <section className='main'>
        <div className='quiz-list'>
          {quizzes.map(quiz =>
            <QuizItem key={quiz.id} quiz={quiz} answerQuiz={actions.answerQuiz} />
          )}
        </div>
      </section>
    )
  }
}

const mapStateToProps = (state, ownProps) => ({
  quizzes: state.quizzes
})

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(QuizActions, dispatch)
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)
