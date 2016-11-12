import React from 'react'
import { shallow } from 'enzyme'

import Result from './Result'

const setup = propOverrides => {
  const props = Object.assign({
    result: 'correct'
  }, propOverrides)

  const enzymeWrapper = shallow(<Result {...props} />)

  return {
    props,
    enzymeWrapper
  }
}

describe('Result', () => {
  it('should render correct', () => {
    const { enzymeWrapper } = setup({ result: 'correct' })
    expect(enzymeWrapper.text()).toMatch(/Correct/)
  })

  it('should render incorerct', () => {
    const { enzymeWrapper } = setup({ result: 'incorrect' })
    expect(enzymeWrapper.text()).toMatch(/Incorrect/)
  })
})
