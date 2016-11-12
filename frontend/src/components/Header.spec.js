import React from 'react'
import { shallow } from 'enzyme'

import Header from './Header'
import { AppBar } from 'material-ui'

describe('Header', () => {
  it('should render self', () => {
    expect(shallow(<Header />).find(AppBar).props().title).toBe('QuizMaster')
  })
})
