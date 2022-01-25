// How to get an array of matching elements and properties

// Start with an array of objects
const array = [
  { id: 1, value: 25 },
  { id: 2, value: 35 },
  { id: 3, value: 45 },
]

// Use filter() method to get matching elements
// Returns an array of matching elements that have a value of 35
const object = array.filter(item => item.value === 35)
console.log(object) // [ { id: 2, value: 35 } ]

// Use filter() + map() to get matching element properties
// Returns an array of matching element properties
const index = array.filter(item => item.value === 35).map(item => item.id)
console.log(index) // [ 2 ]
