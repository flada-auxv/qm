import { expect } from 'chai'

import reducer from './pickedQuiz'

describe('pickedQuiz reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).to.equal(null)
  })

  it('should handle ANSWER_QUIZ', () => {
    expect(
      reducer([], {type: 'ANSWER_QUIZ', quiz: {id: 1, content: '1+1', correctAnswer: '2'}})
    ).to.eql({id: 1, content: '1+1', correctAnswer: '2'})
  })
})
