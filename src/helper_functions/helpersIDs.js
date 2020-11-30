export const maxNumber = (numbers) => {
  // Find max number; could use Math.max() and ... spread operator
  // But a for loop is faster with large data sets typically
  let maxNumber = 0
  for (const number of numbers) {
    if (number > maxNumber) {
      maxNumber = number
    }
  }
  return maxNumber
}
