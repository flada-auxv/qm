import React from 'react'

export default function Result(props) {
  const result = () => {
    let text
    switch (props.result) {
      case 'correct':
        text = 'O Correct!!'
        break
      case 'incorrect':
        text = 'X Incorrect!!'
        break
    }
    return text
  }

  return (
    <span className="result">{result()}</span>
  )
}
