// How to print a number with commas as thousands separator

// Start with a number
const number = 1948576

// Method 1: toLocaleString()
const firstMethod = number.toLocaleString()
console.log(firstMethod) // 1,948,576

// Method 2: Intl.NumberFormat()
const numberFormat = new Intl.NumberFormat()
const secondMethod = numberFormat.format(number)
console.log(secondMethod) // 1,948,576
