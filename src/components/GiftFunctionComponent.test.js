import React from "react"
import { shallow } from "enzyme"
import GiftFunctionComponent from "./GiftFunctionComponent"

describe("Gift", () => {
  const mockRemove = jest.fn()
  const id = 1
  const props = { id, removeGift: mockRemove }
  const gift = shallow(<GiftFunctionComponent {...props} />)

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

  describe("when clicking the `Remove Gift` button", () => {
    beforeEach(() => {
      gift.find(".btn-remove").simulate("click")
    })

    it("calls the removeGift callback", () => {
      expect(mockRemove).toHaveBeenCalledWith(id)
    })
  })
})
