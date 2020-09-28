// How to add dynamically named properties to objects

// Properties to add
const a = 'age'
const j = 'j'

const person = {
  // Regular object properties
  firstName: 'John',
  lastName: 'Doe',
  // Computed property
  [a]: 25,
  // Computed property with template literals
  [`${j}ob`]: 'Software Developer',
}

console.log(person)
/* {
  firstName: 'John',
  lastName: 'Doe',
  age: 25,
  job: 'Software Developer'
} */
