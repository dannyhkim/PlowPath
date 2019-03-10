import React from "react";
import Component from "../Heatmap";
import { shallow } from "enzyme";

const defaultProps = {
  fullScreen: false,
  open: false,
  setOpen: jest.fn()
};

describe("Heatmap Dialog", () => {
  it("renders", () => {
    const wrapper = shallow(<Component {...defaultProps} />);
    expect(wrapper).toMatchSnapshot();
  });
});
