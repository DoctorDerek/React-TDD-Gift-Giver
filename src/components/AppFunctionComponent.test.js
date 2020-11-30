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

  it("Creates a gift component", () => {
    expect(app.find("Gift").exists()).toBe(true)
  })

  describe("and the user wants to remove that gift", () => {
    // The below tests won't work without using mount
    /*
    beforeEach(() => {
      app.find(".btn-remove").simulate("click")
    })
    it("Removes the only gift in the list from the DOM", () => {
      expect(app.find("#gift-list").children().length).toEqual(0)
    })
    */
  })
})
