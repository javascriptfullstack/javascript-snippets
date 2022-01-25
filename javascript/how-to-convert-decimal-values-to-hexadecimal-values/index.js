// How to convert decimal values to hexadecimal values

// Start with a decimal number
const number = 10

// Convert to hexadecimal
const hex = number.toString(16)
console.log(hex) // a

// COnvert back to decimal
const decimal = parseInt(hex, 16)
console.log(decimal) // 10
