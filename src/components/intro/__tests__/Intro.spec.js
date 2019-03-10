import React from "react";
import Component from "../Intro";
import { shallow } from "enzyme";

const defaultProps = {
  classes: {}
};

describe("Intro", () => {
  it("renders", () => {
    const wrapper = shallow(<Component {...defaultProps} />);
    expect(wrapper).toMatchSnapshot();
  });
});
