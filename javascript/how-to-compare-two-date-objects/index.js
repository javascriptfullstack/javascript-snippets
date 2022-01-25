// How to compare two date objects

// Start with two date objects
const today = new Date('2020-08-18')
const tomorrow = new Date('2020-08-29')

// Comparisons
const result1 = today.getTime() < tomorrow.getTime()
const result2 = today.getTime() !== tomorrow.getTime()

console.log(result1) // true
console.log(result2) // true
