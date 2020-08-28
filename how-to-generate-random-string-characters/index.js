// How to generate random string characters

// Method 1: Using Math.random() and Base 36
const rand1 = Math.random().toString(36).slice(-5)
console.log(rand1) // "e5f2a"

// Method 2: Using new Date and Base 36
const rand2 = (+new Date()).toString(36).slice(-5)
console.log(rand2) // "blbvv"

// Method 3: Using Math.random() and btoa
const rand3 = btoa(Math.random()).slice(0, 5)
console.log(rand3) // "MC43O"

// Method 4: Using new Date and btoa
const rand4 = btoa(+new Date()).slice(-7, -2)
const rand5 = btoa(+new Date()).substr(-7, 5)
console.log(rand4) // "jA0Mw"
console.log(rand5) // "jA0Mw"
