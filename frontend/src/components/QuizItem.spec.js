import React from 'react'
import { mount } from 'enzyme'
import QuizItem from './QuizItem'

function setup() {
  const props = {
    answerQuiz: jest.fn(),
    quiz: { content: '1+1' }
  }

  const enzymeWrapper = mount(<QuizItem {...props} />)

  return {
    props,
    enzymeWrapper
  }
}

describe('QuizItem', () => {
  it('should render self', () => {
    const { enzymeWrapper } = setup()
    expect(enzymeWrapper.find('li').text()).toBe('1+1')
  })

  it('should call answerQuiz', () => {
    const { enzymeWrapper, props } = setup()
    const li = enzymeWrapper.find('li')
    expect(props.answerQuiz.mock.calls.length).toBe(0)
    li.props().onClick()
    expect(props.answerQuiz.mock.calls.length).toBe(1)
  })
})
