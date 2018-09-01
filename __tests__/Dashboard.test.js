import React from "react";
import { shallow } from "enzyme";

import Dashboard from "../src/components/Dashboard.js";


describe("Dashboard", () => {
  it("should render without crashing", () => {
    shallow(<Dashboard />);
  });
})