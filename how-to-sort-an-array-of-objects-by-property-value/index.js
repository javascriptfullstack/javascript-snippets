// How to sort an array of objects by property value

// Start with an array of fruit objects
const fruits = [
  { name: 'kiwi', color: 'green' },
  { name: 'apple', color: 'red' },
  { name: 'banana', color: 'yellow' },
]

// Sort fruits by name property
const sortedFruitsByName = fruits.sort((a, b) => a.name.localeCompare(b.name))

// Print sorted fruit objects
sortedFruitsByName.forEach(fruit => console.log(fruit))
