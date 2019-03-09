import React from 'react';
import Component from "../App";
import { shallow } from 'enzyme'

const defaultProps = {
  classes: {}
};

describe('App', () => {
  it('renders', () => {
    const wrapper = shallow(<Component {...defaultProps} />);
    expect(wrapper).toMatchSnapshot();
  })
});