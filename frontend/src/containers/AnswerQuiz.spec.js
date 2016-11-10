import React from 'react'
import { shallow } from 'enzyme'

import { AnswerQuiz } from './AnswerQuiz'
import NotFound from '../components/NotFound'

const setup = propOverrides => {
  const props = Object.assign({
    quiz: { id: 1, content: '1+1', correctAnswer: '2' }
  }, propOverrides)

  const enzymeWrapper = shallow(<AnswerQuiz {...props} />)

  return {
    props,
    enzymeWrapper
  }
}

describe('AnswerQuiz', () => {
  it('should render question and empty input for answer', () => {
    const { enzymeWrapper } = setup()

    expect(enzymeWrapper.find('.question').props().dangerouslySetInnerHTML.__html).toBe('Q: 1+1')
    expect(enzymeWrapper.find('.answer').props().value).toBe('')
  })

  it('should render result when click button of check the answer', () => {
    const { enzymeWrapper } = setup()

    expect(enzymeWrapper.find('.result').length).toBe(0)

    const answerInput = enzymeWrapper.find('.answer')
    const checkAnswer = enzymeWrapper.find('.checkAnswer')

    answerInput.simulate('change', { target: { value: 'hi' } })
    checkAnswer.simulate('click')
    expect(enzymeWrapper.find('.result').text()).toBe('X Incorrect!!')

    answerInput.simulate('change', { target: { value: '2' } })
    checkAnswer.simulate('click')
    expect(enzymeWrapper.find('.result').text()).toBe('O Correct!!')
  })

  it('should recognise the number as words', () => {
    const { enzymeWrapper } = setup({
      quiz: { id: 1, content: 'How old is Akari?', correctAnswer: 'thirteen'  }
    })

    const answerInput = enzymeWrapper.find('.answer')
    const checkAnswer = enzymeWrapper.find('.checkAnswer')

    answerInput.simulate('change', { target: { value: 'thirteen' } })
    checkAnswer.simulate('click')
    expect(enzymeWrapper.find('.result').text()).toBe('O Correct!!')

    answerInput.simulate('change', { target: { value: '13' } })
    checkAnswer.simulate('click')
    expect(enzymeWrapper.find('.result').text()).toBe('O Correct!!')
  })

  it ('should render NotFound when quiz is null', () => {
    const { enzymeWrapper } = setup({ quiz: null })

    enzymeWrapper.find(<NotFound />)
  })
})
