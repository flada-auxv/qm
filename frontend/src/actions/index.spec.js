import { expect } from 'chai'

import * as actions from './'

describe('sync actions', () => {
  it('addQuiz should create ADD_QUIZ action', () => {
    expect(actions.addQuiz('1+1', '2')).to.eql({
      type: 'ADD_QUIZ',
      content: '1+1',
      correctAnswer: '2'
    })
  })

  it('editQuiz should create EDIT_QUIZ action', () => {
    expect(actions.editQuiz(1, '1+1', '2')).to.eql({
      type: 'EDIT_QUIZ',
      id: 1,
      content: '1+1',
      correctAnswer: '2'
    })
  })

  it('deleteQuiz should create DELETE_QUIZ action', () => {
    expect(actions.deleteQuiz(1)).to.eql({
      type: 'DELETE_QUIZ',
      id: 1
    })
  })
})
