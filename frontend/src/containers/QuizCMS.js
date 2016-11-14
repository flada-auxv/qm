import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import * as QuizActions from '../actions'
import MainSection from '../components/admin/MainSection'
import Header from '../components/admin/Header'

export class QuizCMS extends Component {
  componentDidMount() {
    this.props.actions.fetchQuizzesAsync()
  }

  render() {
    return (
      <div>
        <Header addQuizAsync={this.props.actions.addQuizAsync} />
        {this.props.children && React.cloneElement(this.props.children, {
          quizzes: this.props.quizzes,
          actions: this.props.actions
        })}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  quizzes: state.quizzes
})

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(QuizActions, dispatch)
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(QuizCMS)
