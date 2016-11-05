import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import * as QuizActions from '../actions'
import QuizCMS from '../components/QuizCMS'

class App extends Component {
  componentDidMount() {
    this.props.actions.fetchQuizzes()
  }

  render() {
    return (
      <div>
        <QuizCMS quizes={this.props.quizes} actions={this.props.actions} />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  quizes: state.quizes
})

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(QuizActions, dispatch)
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
