// How to get the current timestamp

// Method 1
const option1 = +new Date()

// Method 2
const option2 = new Date().valueOf()

// Method 3
const option3 = new Date().getTime()

// Method 4
const option4 = Date.now()

// Timestamp in milliseconds
console.log(option1)
console.log(option2)
console.log(option3)
console.log(option4)
