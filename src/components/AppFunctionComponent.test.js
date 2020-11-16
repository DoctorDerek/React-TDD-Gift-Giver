import React from "react"
import { shallow } from "enzyme"
import AppFunctionComponent from "./AppFunctionComponent"

let app = shallow(<AppFunctionComponent />)

beforeEach(() => {
  // Clean up between tests:
  app = shallow(<AppFunctionComponent />)
})

// It Renders.
it("Renders correctly", () => {
  expect(app).toMatchSnapshot()
})

describe("when clicking the `Add Gift` button", () => {
  beforeEach(() => {
    app.find("#add-gift-button").simulate("click")
  })

  it("Adds a new gift to the rendered list", () => {
    expect(app.find("#gift-list").children().length).toEqual(1)
  })
})
