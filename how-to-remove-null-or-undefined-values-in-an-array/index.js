// How to remove null or undefined values in an array

// Start with an array
const array = ['JavaScript', 'Full', 'Stack', undefined, 3, null, 37]

// Method 1: Boolean constructor
// Returns a new array
const method1 = array.filter(Boolean)
console.log(method1) // [ 'JavaScript', 'Full', 'Stack', 3, 37 ]

// Method 2: Check for null and undefined values
// Returns a new array
const method2 = array.filter(item => item !== null && item !== undefined)
console.log(method2) // [ 'JavaScript', 'Full', 'Stack', 3, 37 ]
