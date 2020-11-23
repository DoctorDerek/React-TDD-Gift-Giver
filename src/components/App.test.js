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

describe("when clicking the `Add Gift` button", () => {
  const id = 1

  beforeEach(() => {
    app.find("#add-gift-button").simulate("click")
  })

  afterEach(() => {
    app.setState({ gifts: [] })
  })

  it("Adds a gift to `state` when the `Add Gift` button is clicked", () => {
    expect(app.state()).toEqual({ gifts: [{ id }] })
  })

  it("Adds a new gift to the rendered list", () => {
    expect(app.find("#gift-list").children().length).toEqual(1)
  })

  it("Creates a gift component", () => {
    expect(app.find("Gift").exists()).toBe(true)
  })

  describe("and the user wants to remove a gift", () => {
    beforeEach(() => {
      // @ts-ignore because we don't know what's in the component
      app.instance().removeGift(id)
    })
    it("Removes the gift with that id from `state`", () => {
      // app.find("remove-gift").simulate("click")
      // @ts-ignore because we don't know what's in state
      expect(app.state().gifts).toEqual([])
    })
  })
})
