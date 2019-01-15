import { shallow } from 'enzyme'
import React from 'react'
import renderer from 'react-test-renderer'

import App from '../pages/index.js'

describe('With Enzyme', () => {
  it('App shows "Submit a Message!"', () => {
    const app = shallow(<App />)

    expect(app.find('h2').text()).toEqual('Submit a Message!')
  })
})

describe('With Snapshot Testing', () => {
  it('App shows "Submit a Message!"', () => {
    const component = renderer.create(<App />)
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
})