// How to get a random item from an array

// Start with an array
const array = [3, 'javascript', 29, true, 91]

// Method 1: Math.floor()
const method1 = array[Math.floor(Math.random() * array.length)]
console.log(method1) // 3

// Method 2: OR bitwise operator
const method2 = array[(array.length * Math.random()) | 0]
console.log(method2) // javascript

// Method 3: Double NOT bitwise operator
const method3 = array[~~(array.length * Math.random())]
console.log(method3) // 29
