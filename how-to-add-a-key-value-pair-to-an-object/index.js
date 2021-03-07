// How to add a key/value pair to an object

// Start with an object
const orange = {
  type: 'fruit',
  color: 'orange',
}

// Method 1: Dot notation
orange.shape = 'circle'

// Method 2: Square bracket notation
orange['weight'] = 4

console.log(orange) // { type: 'fruit', color: 'orange', shaipe: 'circle', weight: 4 }
