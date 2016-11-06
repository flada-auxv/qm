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
        <MainSection quizes={this.props.quizes} actions={this.props.actions} />
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
)(QuizCMS)
