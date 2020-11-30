import { maxNumber, removeItemByID } from "./helpersIDs"

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

describe("removeItemByID", () => {
  describe("When given an array of objects with ids", () => {
    it("returns an array without that id", () => {
      const arrayOfObjectsWithIds = [{ id: 1 }, { id: 2 }, { id: 3 }]
      const id = 2
      expect(removeItemByID(arrayOfObjectsWithIds, id)).toEqual([
        { id: 1 },
        { id: 3 },
      ])
    })
  })
})
