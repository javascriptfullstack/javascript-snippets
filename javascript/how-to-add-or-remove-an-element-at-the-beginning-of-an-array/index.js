// How to add or remove an element at the beginning of an array

// Start with an array
const colors = ['red', 'blue', 'green']

// Add yellow to the beginning of array
// Array now has 4 elements
console.log(colors.unshift('yellow')) // 4

// Add orange, gray, and black to the beginning of array
// Array now has 7 elements
console.log(colors.unshift('orange', 'gray', 'black')) // 7

// Remove first element in array
console.log(colors.shift()) // orange

// Array now has 6 elements
console.log(colors) // ['gray', 'black', 'yellow', 'red', 'blue', 'green']
