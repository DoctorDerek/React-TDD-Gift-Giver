import React from "react"
import { mount } from "enzyme"
import AppFunctionComponent from "./AppFunctionComponent"

let app = mount(<AppFunctionComponent />)

beforeEach(() => {
  // Clean up between tests:
  app = mount(<AppFunctionComponent />)
})

// It Renders.
it("Renders correctly", () => {
  expect(app).toMatchSnapshot()
})

describe("when clicking the `Add Gift` button", () => {
  beforeEach(() => {
    app.find("#add-gift-button").hostNodes().simulate("click")
  })

  it("Adds a new gift to the rendered list", () => {
    expect(app.find("#gift-list").children().length).toEqual(1)
  })

  it("Creates a gift component", () => {
    expect(app.find("Gift").exists()).toBe(true)
  })

  describe("and the user wants to remove that gift", () => {
    // Use .hostNodes() instead of .first() as recommended by:
    // https://github.com/enzymejs/enzyme/issues/1253#issuecomment-367930412
    beforeEach(() => {
      app.find(".btn-remove").hostNodes().simulate("click")
      // This code works equally with Enzyme's shallow & mount
    })

    it("Removes the only gift in the list from the DOM", () => {
      expect(app.find("#gift-list").children().length).toEqual(0)
    })
  })
})
