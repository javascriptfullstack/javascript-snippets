// How to use local storage to store data in the browser
// Data persists even if the browser is closed
//
// ** IMPORTANT: Don't save sensitive information in local storage!

// Start with an object
const item = {
  name: 'ball',
  color: 'red',
  weight: 5,
}

// Save item to local storage
localStorage.setItem('item', JSON.stringify(item))

// Get item from local storage
const itemFromStorage = localStorage.getItem('item')

console.log('Item from storage: ', JSON.parse(itemFromStorage)) // { name: 'ball', color: 'red', weight: 5 }
