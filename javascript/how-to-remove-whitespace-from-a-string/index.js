// How to remove whitespace from a string

// Start with a string
const textWithSpace = '  JavaScript Full Stack '

// Method 1: Built-in trim() method
const trimmed = textWithSpace.trim()
console.log(trimmed) // 'JavaScript Full Stack'

// Method 2: Regex
const regex = textWithSpace.replace(/^\s+|\s+$/g, '')
console.log(regex) // 'JavaScript Full Stack'
