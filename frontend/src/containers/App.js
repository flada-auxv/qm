import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import * as QuizActions from '../actions'
import QuizCMS from '../components/QuizCMS'

const App = ({quizes, actions}) => (
  <div>
    <QuizCMS quizes={quizes} actions={actions} />
  </div>
)

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
