// Example arrays
const numbers = [1, 2, 3]
const colors = ['red', 'blue', 'green']

// Method 1: Concatenate
const concatMethod = [].concat(numbers, colors)
console.log(concatMethod) // [ 1, 2, 3, 'red', 'blue', 'green' ]

// Method 2: Spread operator
const spreadMethod = [...numbers, ...colors]
console.log(spreadMethod) // [ 1, 2, 3, 'red', 'blue', 'green' ]

// Method 3: Reduce
const arrays = [numbers, colors]
const reduceMethod = arrays =>
  arrays.reduce((accumulator, next) => [...accumulator, ...next])
console.log(reduceMethod(arrays)) // [ 1, 2, 3, 'red', 'blue', 'green' ]

// Method 4: Flat
const flatMethod = [numbers, colors].flat()
console.log(flatMethod) // [ 1, 2, 3, 'red', 'blue', 'green' ]
