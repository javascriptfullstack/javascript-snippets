// How to parse and stringify JSON in JavaScript

// Start with a string
const jsonString = '{ "a": 1, "b": "red" }'

// Use JSON.parse() to convert to JavaScript object
const parsed = JSON.parse(jsonString)
console.log(parsed.a) // 1
console.log(parsed.b) // red

// Use JSON.stringify() to convert to JSON string
const stringified = JSON.stringify(parsed)
console.log(stringified) // { "a": 1, "b": "red" }
