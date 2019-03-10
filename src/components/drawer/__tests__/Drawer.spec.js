import React from "react";
import Component from "../Drawer";
import { shallow } from "enzyme";

const defaultProps = {
  classes: {},
  theme: {}
};

describe("Drawer", () => {
  it("renders", () => {
    const wrapper = shallow(<Component {...defaultProps} />);
    expect(wrapper).toMatchSnapshot();
  });
});
