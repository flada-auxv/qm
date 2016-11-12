import React from 'react'
import { mount } from 'enzyme'

import { Home } from './Home'
import QuizItem from '../components/QuizItem'

import { MuiThemeProvider } from 'material-ui'
import injectTapEventPlugin from 'react-tap-event-plugin'
injectTapEventPlugin();

const setup = propOverrides => {
  const props = Object.assign({
    quizzes: [
      { id: 1, content: '1+1', correctAnswer: '2' },
      { id: 2, content: 'akaza', correctAnswer: 'akari' }
    ],
    actions: {
      answerQuiz: jest.fn()
    }
  }, propOverrides)

  const enzymeWrapper = mount(
    <MuiThemeProvider>
      <Home {...props} />
    </MuiThemeProvider>
  )

  return {
    props,
    enzymeWrapper
  }
}

describe('Home', () => {
  it('should render QuizItem', () => {
    const { props, enzymeWrapper } = setup()
    const quizList = enzymeWrapper.find('.quiz-list').children()
    expect(quizList.length).toBe(2)

    quizList.forEach((item, i) => {
      expect(item.type()).toBe(QuizItem)
      expect(item.props().quiz).toBe(props.quizzes[i])
    })
  })
})
