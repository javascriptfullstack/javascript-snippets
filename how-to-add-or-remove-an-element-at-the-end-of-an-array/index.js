// How to add or remove an element at the end of an array

// Start with an array
const colors = ['red', 'blue', 'green']

// Add yellow to the end of array
// Array now has 4 elements
console.log(colors.push('yellow')) // 4

// Add orange, gray, and black to the end of array
// Array now has 7 elements
console.log(colors.push('orange', 'gray', 'black')) // 7

// Remove last element in array
console.log(colors.pop()) // black

// Array now has 6 elements
console.log(colors) // [ 'red', 'blue', 'green', 'yellow', 'orange', 'gray' ]
