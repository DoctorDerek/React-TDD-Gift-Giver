import React from "react"
import { shallow } from "enzyme"
import Gift from "./gift"

describe("Gift", () => {
  const gift = shallow(<Gift />)

  it("renders properly", () => {
    expect(gift).toMatchSnapshot()
  })

  describe("when typing into the person input", () => {
    beforeEach(() => {
      gift.find(".input-person").simulate("change")
    })
  })
})
