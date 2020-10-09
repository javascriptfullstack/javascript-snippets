// How to use template literals

// Start with a few variables
const name = 'Tom'
const age = 25

// Without template literals
console.log(name + ' is ' + age + ' years old')
// Tom is 25 years old

// With template literals
console.log(`${name} is ${age} years old`)
// Tom is 25 years old

// We can use any JavaScript expression inside template literals
console.log(`${{ name: 'Tom' }.name} is ${{ age: 25 }.age} years old`)
// Tom is 25 years old

// We can easily create multi-line strings
console.log(
  `${name}
is
${age}
years
old`
)
// Tom
// is
// 25
// years
// old
