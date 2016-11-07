import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { Router, Route, Link, browserHistory } from 'react-router'

import * as QuizActions from '../actions'
import MainSection from '../components/MainSection'

class App extends Component {
  componentDidMount() {
    this.props.actions.fetchQuizzesAsync()
  }

  render() {
    return (
      <div>
        { /* hmm... Should childen be container components in order to pass props to them?? */ }
        {this.props.children && React.cloneElement(this.props.children, {
          quizzes: this.props.quizzes,
          answeringQuiz: this.props.answeringQuiz,
          actions: this.props.actions
        })}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  quizzes: state.quizzes,
  answeringQuiz: state.answeringQuiz
})

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(QuizActions, dispatch)
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
