import { expect } from 'chai'

import reducer from './quizzes'

describe('quizzes reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).to.eql([])
  })

  it('should handle ADD_QUIZ', () => {
    const actual = reducer([], { type: 'ADD_QUIZ', content: '1+1', correctAnswer: '2' })

    expect(actual).to.lengthOf(1)
    expect(actual).to.deep.include({ id: 0, content: '1+1', correctAnswer: '2' })
  })

  it('should handle EDIT_QUIZ', () => {
    const quiz = { id: 1, content: '2+2', correctAnswer: '4' }
    const actual = reducer([quiz], { type: 'EDIT_QUIZ', id: 1, content: 'edited content', correctAnswer: 'edited answer' })

    expect(actual).to.lengthOf(1)
    expect(actual).to.deep.include({ id: 1, content: 'edited content', correctAnswer: 'edited answer' })
  })

  it('should handle DELETE_QUIZ', () => {
    const quiz = { id: 1, content: '2+2', correctAnswer: '4' }

    expect(reducer([quiz], { type: 'DELETE_QUIZ', id: 1 })).to.empty
  })
})
