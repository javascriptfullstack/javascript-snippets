// How to combine or merge arrays

// Test arrays
const numbers = [1, 2, 3]
const colors = ['red', 'blue', 'green']

// Method 1: Concatenate
const concat = [].concat(numbers, colors)
console.log(concat) // [ 1, 2, 3, 'red', 'blue', 'green' ]

// Method 2: Spread operator
const spread = [...numbers, ...colors]
console.log(spread) // [ 1, 2, 3, 'red', 'blue', 'green' ]

// Method 3: Reduce
const arrays = [numbers, colors]
const newArray = arrays =>
  arrays.reduce((accumulator, next) => [...accumulator, ...next])
console.log(newArray(arrays)) // [ 1, 2, 3, 'red', 'blue', 'green' ]

// Method 4: Flat
const flat = [numbers, colors].flat()
console.log(flat) // [ 1, 2, 3, 'red', 'blue', 'green' ]
