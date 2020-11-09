import React from "react"
import { shallow } from "enzyme"
import AppFunctionComponent from "./AppFunctionComponent"

const app = shallow(<AppFunctionComponent />)

// It Renders.
it("Renders correctly", () => {
  expect(app).toMatchSnapshot()
})

it("Adds a new gift to the list when clicking the `Add Gift` button", () => {
  app.find("#add-gift-button").simulate("click")
  expect(app.find("#gift-list").children().length).toEqual(1)
})
