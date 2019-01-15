import * as React from 'react'
import {mount} from 'enzyme'
import IndexPage from '../pages/index'

describe('Pages', () => {
  describe('Index', () => {
    it('should render without throwing an error', function () {
      const wrap = mount(<IndexPage />)
      expect(wrap.find('div').text()).toBe('Hello Next.js')
    })
  })
})