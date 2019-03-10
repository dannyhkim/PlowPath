import React from "react";
import Component from "../Content";
import { shallow } from "enzyme";

const defaultProps = {};

describe("Content", () => {
  it("renders", () => {
    const wrapper = shallow(<Component {...defaultProps} />);
    expect(wrapper).toMatchSnapshot();
  });
});
