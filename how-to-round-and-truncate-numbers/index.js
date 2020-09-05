// How to round and truncate numbers

// Start with a number
const number = 6.938759

// Rounds to nearest integer
const round = Math.round(number)
console.log(round) // 7

// Rounds down
const floor = Math.floor(number)
console.log(floor) // 6

// Rounds up
const ceil = Math.ceil(number)
console.log(ceil) // 7

// Truncating removes all fractional digits
const trunc = Math.trunc(number)
console.log(trunc) // 6
