import { shallow } from 'enzyme'
import React from 'react'

import App from '../pages/index.js'

describe('With Snapshot Testing', () => {
  it('App should render correctly in "debug" mode', () => {
    const component = shallow(<App debug />);

    expect(component).toMatchSnapshot();
  });
});

describe('Index', () => {
  it('should display ', () => {
    const wrap = shallow(
      <App />
    )

    expect(wrap.find('h2').text()).toEqual('Submit a Message!')
  });
});
