import React from "react"
import { shallow } from "enzyme"
import GiftFunctionComponent from "./GiftFunctionComponent"

describe("Gift", () => {
  const gift = shallow(<GiftFunctionComponent />)

  it("renders properly", () => {
    expect(gift).toMatchSnapshot()
  })

  describe("when typing into the person input", () => {
    beforeEach(() => {
      gift.find(".input-person").simulate("change")
    })
  })

  describe("when typing into the present input", () => {
    beforeEach(() => {
      gift.find(".input-present").simulate("change")
    })
  })
})
