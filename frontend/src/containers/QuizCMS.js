import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import * as QuizActions from '../actions'
import MainSection from '../components/admin/MainSection'

class QuizCMS extends Component {
  componentDidMount() {
    this.props.actions.fetchQuizzesAsync()
  }

  render() {
    return (
      <div>
        <MainSection quizzes={this.props.quizzes} actions={this.props.actions} />
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
