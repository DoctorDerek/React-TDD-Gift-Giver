import React from "react"
import { shallow } from "enzyme"
import Gift from "./gift"

describe("Gift", () => {
  const gift = shallow(<Gift />)

  it("renders properly", () => {
    expect(gift).toMatchSnapshot()
  })

  it("initializes a person and present in `state`", () => {
    expect(gift.state()).toEqual({ person: "", present: "" })
  })

  describe("when typing into the person input", () => {
    const person = "Uncle"

    beforeEach(() => {
      gift
        .find(".input-person")
        .simulate("change", { target: { value: person } })
    })

    it("Updates the person in `state`", () => {
      // @ts-ignore because .state() is unknown to TypeScript
      expect(gift.state().person).toEqual(person)
    })
  })

  describe("when typing into the present input", () => {
    const present = "Money"

    beforeEach(() => {
      gift
        .find(".input-present")
        .simulate("change", { target: { value: present } })
    })

    it("Updates the person in `state`", () => {
      // @ts-ignore because .state() is unknown to TypeScript
      expect(gift.state().present).toEqual(present)
    })
  })
})
