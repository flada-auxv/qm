import React from 'react'
import { AppBar } from 'material-ui'

export default function Header() {
  return (
    <header className="header">
      <AppBar showMenuIconButton={false} title="QuizMaster" />
    </header>
  )
}
