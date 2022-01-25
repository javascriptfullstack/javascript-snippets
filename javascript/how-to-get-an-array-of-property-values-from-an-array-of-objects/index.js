// How to get an array of property values from an array of objects

// Start with an array of objects
const array = [
  { id: 1, value: 35 },
  { id: 2, value: 27 },
  { id: 3, value: 73 },
]

// Using Array.map()
const result1 = array.map(obj => obj.value)
console.log(result1) // [ 35, 27, 73 ]

// Using Array.map() + object destructuring
const result2 = array.map(({ value }) => value)
console.log(result2) // [ 35, 27, 73 ]

// Using for...of loop
const result3 = []

for (let obj of array) {
  result3.push(obj.value)
}

console.log(result3) // [ 35, 27, 73 ]
