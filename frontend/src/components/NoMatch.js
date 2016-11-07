import React, { Component } from 'react'
import { Link } from 'react-router'

export default class NoMatch extends Component {
  render() {
    return (
      <div>
        <h2>Not Found</h2>
        <Link to="/">Go to Homepage</Link>
      </div>
    )
  }
}
