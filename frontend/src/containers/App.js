import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

const App = () => (
  <div>
    hi
  </div>
)

const mapStateToProps = state => ({
})

const mapDispatchToProps = dispatch => ({
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
