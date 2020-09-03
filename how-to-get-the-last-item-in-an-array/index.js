// How to get the last item in an array

// Start with an array
const values = [1, 2, 3, 4, 5]

// Method 1: Array.length()
const method1 = values[values.length - 1]
console.log(method1)

// Method 2: Array.slice()
const method2 = values.slice(-1)[0]
console.log(method2)

// Method 3: Array.slice() with destructuring
const [method3] = values.slice(-1)
console.log(method3)

// Method 4: Array.pop()
// ** This method removes the element from the array
const method4 = values.pop()
console.log(method4)
