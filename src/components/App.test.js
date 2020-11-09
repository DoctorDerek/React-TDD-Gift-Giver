import React from "react"
import { shallow } from "enzyme"
import App from "./App"

const app = shallow(<App />)

// It Renders.
it("renders correctly", () => {
  expect(app).toMatchSnapshot()
})

it("Initializes `state` as an empty array of gifts", () => {
  expect(app.state()).toEqual({ gifts: [] })
})

it("Adds a gift to `state` when the `Add Gift` button is clicked", () => {
  app.find("#add-gift-button").simulate("click")
  expect(app.state()).toEqual({ gifts: [{ id: 1 }] })
})
