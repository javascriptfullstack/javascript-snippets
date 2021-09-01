// How to get all the keys and values in an object

// Start with an object
const person = {
  firstName: 'John',
  lastName: 'Doe',
  age: 25,
}

// Get keys
// Returns an array
const keys = Object.keys(person)
console.log(keys) // ['firstName', 'lastName', 'age']

// Get values
// Returns an array
const values = Object.values(person)
console.log(values) // ['John', 'Doe', 25]

// Get keys and values
// Returns an array of arrays
const entries = Object.entries(person)
console.log(entries) // [['firstName', 'John'], ['lastName', 'Doe'], ['age', 25]]

// Get original object back
const obj = Object.fromEntries(new Map(entries))
console.log(obj) // { firstName: 'John', lastName: 'Doe', age: '25 }
