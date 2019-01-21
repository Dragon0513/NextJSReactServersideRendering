import { shallow } from 'enzyme'
import React from 'react'

import Guestbook from '../pages/guestbook.js'

describe('With Snapshot Testing', () => {
  it('Guestbook should render correctly in "debug" mode', () => {
    const component = shallow(<Guestbook debug />);

    expect(component).toMatchSnapshot();
  });
});

describe('Guestbook', () => {
  it('should display ', () => {
    const wrap = shallow(
      <Guestbook />
    )

    expect(wrap.find('h2').text()).toEqual('Guestbook Messages!')
  });
});
