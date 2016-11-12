import React from 'react'

import { FontIcon } from 'material-ui'

export default function Result(props) {
  const result = () => {
    let text
    switch (props.result) {
      case 'correct':
        text = (
          <span className="result">
            <FontIcon className="fa fa-check" style={{ marginRight: 10 }} />
            Correct!!
          </span>
        )
        break
      case 'incorrect':
        text = (
          <span className="result">
            <FontIcon className="fa fa-times" style={{ marginRight: 10 }} />
            Incorrect!!
          </span>
        )
        break
    }
    return text
  }

  return result()
}
