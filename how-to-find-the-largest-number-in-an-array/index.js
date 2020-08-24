// How to find the largest number in an array

// Start with an array of numbers
const numbers = [46, 846, 29, 311, 579, 999]

// Method 1: apply()
const largestWithApply = Math.max.apply(Math, numbers)
console.log(largestWithApply) // 999

// Method 2: Spread operator
const largestWithSpread = Math.max(...numbers)
console.log(largestWithSpread) // 999

// Method 3: reduce()
const largestWithReduce = numbers.reduce((previous, current) =>
  Math.max(previous, current)
)
console.log(largestWithReduce) // 999
