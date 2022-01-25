// How to use a switch statement

// Switch statement is great when there are multiple if checks
const getFruitColor = fruit => {
  switch (fruit) {
    case 'apple':
      console.log('red')
      break
    case 'banana':
      console.log('yellow')
      break
    // Use fall-through feature to group cases
    case 'orange':
    case 'tangerine':
      console.log('orange')
      break
    default:
      alert('Not sure about the color')
  }
}

getFruitColor('apple') // red
getFruitColor('banana') // yellow
getFruitColor('orange') // orange
getFruitColor('tangerine') // orange
