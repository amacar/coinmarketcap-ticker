import React from "react";
import { MemoryRouter } from "react-router-dom";
import Enzyme, { mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Back from "./Back";

Enzyme.configure({ adapter: new Adapter() });

const createWrapper = initState =>
  mount(
    <MemoryRouter initialEntries={[initState]}>
      <Back />
    </MemoryRouter>
  );

describe("rendering Back button", () => {
  const initPath = { pathname: "/" };
  const initPathWithState = {
    pathname: "/",
    state: { prevPath: "/" }
  };

  it("No prevPath in state, no button rendering", async () => {
    const wrapper = createWrapper(initPath);

    expect(wrapper.find("button").length).toEqual(0);
  });

  it("prevPath in state, button should be rendered", async () => {
    const wrapper = createWrapper(initPathWithState);

    expect(wrapper.find("button").length).toEqual(1);
  });
});
