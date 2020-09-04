// How to compare two objects

// Start with three objects
const apple = {
  type: 'fruit',
  color: 'red',
}

const banana = {
  type: 'fruit',
  color: 'yellow',
}

const galaApple = {
  type: 'fruit',
  color: 'red',
}

// First comparison between apple and banana objects
const first = JSON.stringify(apple) === JSON.stringify(banana)
console.log(first) // false

// Second comparison between apple and galaApple objects
const second = JSON.stringify(apple) === JSON.stringify(galaApple)
console.log(second) // true
