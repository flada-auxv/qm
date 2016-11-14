import React from 'react'
import { AppBar } from 'material-ui'

import AddQuizDialog from './AddQuizDialog'

export default function Header(props) {
  return (
    <header className="header">
      <AppBar
        showMenuIconButton={false}
        title="QuizMaster"
        iconElementRight={<AddQuizDialog addQuizAsync={props.addQuizAsync}/>}
        iconStyleRight={{ display: "flex", alignItems: "center", margin: 0 }}
      />
    </header>
  )
}
