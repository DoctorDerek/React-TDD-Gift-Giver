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

  // TODO
  describe("and the user wants to remove a gift", () => {
    /*beforeEach(() => {
      // @ts-ignore because we don't know what's in the component
      app.instance().removeGift(id)
    })
    it("Removes the gift with that id from `state`", () => {
      // app.find("remove-gift").simulate("click")
      // @ts-ignore because we don't know what's in state
      expect(app.state().gifts).toEqual([])
    })*/
  })
})
