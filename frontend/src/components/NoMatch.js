import React, { Component } from 'react'
import { Link } from 'react-router'

export default class NoMatch extends Component {
  render() {
    return (
      <div>
        <h1>Not Found</h1>
        <Link to="/">Go to Homepage</Link>
      </div>
    )
  }
}
