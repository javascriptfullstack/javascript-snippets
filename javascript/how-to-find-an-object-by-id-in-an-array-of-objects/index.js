// How to find an object by id in an array of objects

// Start with an array of objects
const array = [
  { id: 1, value: 25 },
  { id: 2, value: 35 },
  { id: 3, value: 45 },
]

// Use find() method to find an object by its id
const object = array.find(item => item.id === 2)
console.log(object) // { id: 2, value: 35 }

// Use findIndex() method to get the index of the object
const index = array.findIndex(item => item.id === 2)
console.log(index) // 1
