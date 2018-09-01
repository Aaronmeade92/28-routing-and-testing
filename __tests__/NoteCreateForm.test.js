import React from "react";
import { shallow } from "enzyme";
import NoteCreateForm from "../src/components/NoteCreateForm.js";



describe("NoteCreateForm", () => {
  it("should render", () => {
    shallow(<NoteCreateForm />);
  });
})