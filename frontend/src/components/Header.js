import React from 'react'
import { AppBar } from 'material-ui'

export default function Header() {
  // TODO: `title` should be link to home-page, and I can pass a React.PropTypes.node. Let's try later...
  return (
    <header className="header">
      <AppBar showMenuIconButton={false} title="QuizMaster" />
    </header>
  )
}
