// How to empty an array

let first = ['red', 'blue', 'green']
let second = [1, 2, 3]
let third = ['orange', 'yellow', 'gray']
let fourth = [4, 5, 6]

// Method 1: Set to empty array
// Use this if you don't have other references to this array
first = []
console.log(first) // []

// Method 2: Set length equal to zero
// Use this if you have other references to this array that need to be updated
second.length = 0
console.log(second) // []

// Method 3: Splice
// CLears existing array by setting length to zero
third.splice(0, third.length)
console.log(third)

// Method 4: pop() in while loop
while (fourth.length) {
  fourth.pop()
}
console.log(fourth) // []
