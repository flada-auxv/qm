import React from 'react'
import { shallow } from 'enzyme'
import NotFound from './NotFound'

function setup() {
  const enzymeWrapper = shallow(<NotFound />)

  return { enzymeWrapper }
}

describe('NotFound', () => {
  it('should render self', () => {
    const { enzymeWrapper } = setup()
    expect(enzymeWrapper.find('h2').text()).toBe('Not Found')
    expect(enzymeWrapper.find('Link').props().to).toBe('/')
  })
})
