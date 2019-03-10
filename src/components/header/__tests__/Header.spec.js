import React from "react";
import Component from "../Header";
import { shallow } from "enzyme";
import PropTypes from "prop-types";

const defaultProps = {
  classes: {},
  open: PropTypes.bool,
  setOpen: PropTypes.func
};

describe("Header", () => {
  it("renders", () => {
    const wrapper = shallow(<Component {...defaultProps} />);
    expect(wrapper).toMatchSnapshot();
  });
});
