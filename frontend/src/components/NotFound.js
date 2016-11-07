import React, { Component } from 'react'
import { Link } from 'react-router'

export default class NotFound extends Component {
  render() {
    return (
      <div>
        <h2>Not Found</h2>
        <Link to="/">Go to Homepage</Link>
      </div>
    )
  }
}
