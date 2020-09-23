// How to get the last number of characters in a string

// Start with a string
const name = 'JavaScript Full Stack'

// Method 1: split() + pop()
// Splits the string into an array on the spaces and gets the last element of the array.
const method1 = name.split(' ').pop()
console.log(method1) // Stack

// Method 2: slice()
// Use the length of the string and subtract the number of characters we want to get.
// This gets our starting point and no second argument for slice() gets the rest of the characters.
const method2 = name.slice(name.length - 5)
console.log(method2) // Stack
