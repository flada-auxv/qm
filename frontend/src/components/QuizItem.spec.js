import React from 'react'
import { mount } from 'enzyme'
import { MuiThemeProvider, ListItem } from 'material-ui'
import injectTapEventPlugin from 'react-tap-event-plugin'
injectTapEventPlugin();

import QuizItem from './QuizItem'

function setup() {
  const props = {
    quiz: { content: '1+1' },
    answerQuiz: jest.fn()
  }

  const enzymeWrapper = mount(
    <MuiThemeProvider>
      <QuizItem {...props} />
    </MuiThemeProvider>
  )

  return {
    props,
    enzymeWrapper
  }
}

describe('QuizItem', () => {
  it('should render self', () => {
    const { enzymeWrapper } = setup()
    expect(enzymeWrapper.find('.question').text()).toBe('1+1')
  })

  it('should call answerQuiz', () => {
    const { enzymeWrapper, props } = setup()
    const listItem = enzymeWrapper.find(ListItem)
    expect(props.answerQuiz.mock.calls.length).toBe(0)
    listItem.props().onClick()
    expect(props.answerQuiz.mock.calls.length).toBe(1)
  })
})
