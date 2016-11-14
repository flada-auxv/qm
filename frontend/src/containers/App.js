import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import Header from '../components/Header'
import * as QuizActions from '../actions'

export class App extends Component {
  componentDidMount() {
    this.props.actions.fetchQuizzesAsync()
  }

  render() {
    return (
      <div>
        <Header />
        {this.props.children && React.cloneElement(this.props.children, {
          pickedQuiz: this.props.pickedQuiz,
          quizzes: this.props.quizzes,
          actions: this.props.actions
        })}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  pickedQuiz: state.pickedQuiz,
  quizzes: state.quizzes
})

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(QuizActions, dispatch)
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
