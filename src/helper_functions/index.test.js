import { maxNumber } from "./helpersIDs"

describe("maxNumber", () => {
  describe("When given an empty array", () => {
    it("returns 0", () => {
      expect(maxNumber([])).toEqual(0)
    })
  })
  describe("When given an array of numbers", () => {
    it("returns the largest number", () => {
      const arrayOfNumbers = [1, 2, 3]
      expect(maxNumber(arrayOfNumbers)).toEqual(3)
      // Math.max(...arrayOfNumbers)
    })
  })
})
