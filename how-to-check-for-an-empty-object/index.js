// How to check for an empty object

// Test objects
const object1 = { a: 5, b: 8, c: 10 }
const object2 = {}

// Method 1: Object.keys()
const isObject1Empty =
  Object.keys(object1).length === 0 && object1.constructor === Object
console.log(isObject1Empty) // false

const isObject2Empty =
  Object.keys(object2).length === 0 && object2.constructor === Object
console.log(isObject2Empty) // true

// Method 2: for...in loop
const isEmpty = object => {
  for (let prop in object) {
    if (object.hasOwnProperty(prop)) {
      return false
    }
  }

  return JSON.stringify(object) === JSON.stringify({})
}

console.log(isEmpty(object1)) // false
console.log(isEmpty(object2)) // true
