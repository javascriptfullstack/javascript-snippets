// How to check if a key exists in an object

// Start with an object
const dog = {
  name: 'Jack',
  color: 'brown',
  age: 5,
}

// Method 1: hasOwnProperty()
const hasAge = dog.hasOwnProperty('age')
console.log(hasAge) // true

// Method 2: In operator
// Syntax: prop in object
console.log('color' in dog) // true

// Add fallback in case a key doesn't exist
const hasName = dog.name || 'Jack'
console.log(hasName)
