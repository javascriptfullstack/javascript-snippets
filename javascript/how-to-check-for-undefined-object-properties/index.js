// How to check for undefined object properties

// Test object
const object = { number: 3, color: 'blue', type: undefined }

// Check if property is undefined
if (object.type === undefined) {
  console.log(`Type is ${object.type}`)
}

// Check if property is undefined using typeof
if (typeof object.type === 'undefined') {
  console.log(`Type is ${object.type}`)
}

// Check if property exists in object
if (!object.hasOwnProperty('location')) {
  console.log('Location does not exists')
}
