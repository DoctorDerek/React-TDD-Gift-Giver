import React from "react"
import { shallow } from "enzyme"
import App from "./App"

const app = shallow(<App />)

// It Renders.
it("Renders correctly", () => {
  expect(app).toMatchSnapshot()
})

it("Initializes `state` as an empty array of gifts", () => {
  expect(app.state()).toEqual({ gifts: [] })
})

it("Adds a gift to `state` when the `Add Gift` button is clicked", () => {
  app.find("#add-gift-button").simulate("click")
  expect(app.state()).toEqual({ gifts: [{ id: 1 }] })
})

it("Adds a new gift to the list when clicking the `Add Gift` button", () => {
  app.find("#add-gift-button").simulate("click")
  expect(app.find("#gift-list").children().length).toEqual(1)
})
