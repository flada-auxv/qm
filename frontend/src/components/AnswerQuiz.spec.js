import React from 'react'
import { shallow } from 'enzyme'
import Dialog from 'material-ui'

import AnswerQuiz from './AnswerQuiz'
import Result from './Result'
import NotFound from './NotFound'

const setup = propOverrides => {
  const props = Object.assign({
    pickedQuiz: { id: 1, content: '1+1', correctAnswer: '2' }
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

    expect(enzymeWrapper.find('.question').props().dangerouslySetInnerHTML.__html).toBe('1+1')
    expect(enzymeWrapper.find('.answer').props().value).toBe('')
  })

  it('should render <Dialog> including <Result> ', () => {
    const { enzymeWrapper } = setup()

    expect(enzymeWrapper.find('.resultDialog').props().open).toBe(false)

    enzymeWrapper.find('.checkAnswer').simulate('click')

    const dialog = enzymeWrapper.find('.resultDialog')
    expect(dialog.props().open).toBe(true)
    expect(dialog.find(Result).length).toBe(1)
  })

  it('should set result when click button of check the answer', () => {
    const { enzymeWrapper } = setup()

    const answerInput = enzymeWrapper.find('.answer')
    const checkAnswer = enzymeWrapper.find('.checkAnswer')

    answerInput.simulate('change', { target: { value: 'hi' } })
    checkAnswer.simulate('click')
    expect(enzymeWrapper.state().result).toBe('incorrect')

    answerInput.simulate('change', { target: { value: '2' } })
    checkAnswer.simulate('click')
    expect(enzymeWrapper.state().result).toBe('correct')
  })

  it('should recognise the number as words', () => {
    const { enzymeWrapper } = setup({
      pickedQuiz: { id: 1, content: 'How old is Akari?', correctAnswer: 'thirteen'  }
    })

    const answerInput = enzymeWrapper.find('.answer')
    const checkAnswer = enzymeWrapper.find('.checkAnswer')

    answerInput.simulate('change', { target: { value: 'thirteen' } })
    checkAnswer.simulate('click')
    expect(enzymeWrapper.state().result).toBe('correct')

    answerInput.simulate('change', { target: { value: '13' } })
    checkAnswer.simulate('click')
    expect(enzymeWrapper.state().result).toBe('correct')
  })

  it ('should render NotFound when pickedQuiz is null', () => {
    const { enzymeWrapper } = setup({ pickedQuiz: null })

    enzymeWrapper.find(<NotFound />)
  })
})
