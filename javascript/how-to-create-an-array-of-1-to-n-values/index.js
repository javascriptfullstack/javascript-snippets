// How to create an array of 1 to n values

// Let's say we want to create an array of values from 1 to 15
const numberOfValues = 15

// Method 1: Spread operator with Array.keys()
const method1 = [...Array(numberOfValues).keys()].map(i => ++i)
console.log(method1) // [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15 ]

// Method 2: Array.from()
const method2 = Array.from(Array(numberOfValues), (_, i) => ++i)
console.log(method2) // [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15 ]
