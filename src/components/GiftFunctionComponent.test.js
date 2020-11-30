import React from "react"
import { shallow } from "enzyme"
import GiftFunctionComponent from "./GiftFunctionComponent"

describe("GiftFunctionComponent", () => {
  const mockRemove = jest.fn()
  const id = 1
  const props = { id, removeGift: mockRemove }
  const gift = shallow(<GiftFunctionComponent {...props} />)

  it("renders properly", () => {
    expect(gift).toMatchSnapshot()
  })

  describe("when typing into the person input", () => {
    const person = "Uncle"

    beforeEach(() => {
      gift
        .find(".input-person")
        .simulate("change", { target: { value: person } })
    })

    it("Updates the listed person", () => {
      expect(gift.find(".person").text()).toEqual(person)
    })
  })

  describe("when typing into the present input", () => {
    const present = "Money"

    beforeEach(() => {
      gift
        .find(".input-present")
        .simulate("change", { target: { value: present } })
    })

    it("Updates the listed present", () => {
      expect(gift.find(".present").text()).toEqual(present)
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
