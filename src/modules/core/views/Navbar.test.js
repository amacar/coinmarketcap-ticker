import React from "react";
import { MemoryRouter } from "react-router-dom";
import Enzyme, { mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Navbar from "./Navbar";

Enzyme.configure({ adapter: new Adapter() });

const createWrapper = path =>
  mount(
    <MemoryRouter initialEntries={[path]}>
      <Navbar />
    </MemoryRouter>
  );

describe("active classname on right element", () => {
  const initPath = { pathname: "/" };
  const notFoundPath = { pathname: "/notFound" };
  const settingsPath = { pathname: "/settings" };

  it("init path, active on home (<li>)", async () => {
    const wrapper = createWrapper(initPath);

    expect(
      wrapper
        .find("Link")
        .at(0)
        .childAt(0)
        .hasClass("active")
    ).toEqual(true);
    expect(
      wrapper
        .find("Link")
        .at(1)
        .childAt(0)
        .hasClass("active")
    ).toEqual(false);
  });

  it("settings path, active on settings (<li>)", async () => {
    const wrapper = createWrapper(settingsPath);

    expect(
      wrapper
        .find("Link")
        .at(0)
        .childAt(0)
        .hasClass("active")
    ).toEqual(false);
    expect(
      wrapper
        .find("Link")
        .at(1)
        .childAt(0)
        .hasClass("active")
    ).toEqual(true);
  });

  it("not found path, no active class", async () => {
    const wrapper = createWrapper(notFoundPath);

    wrapper.find("Link").forEach(node => {
      expect(node.childAt(0).hasClass("active")).toEqual(false);
    });
  });
});
