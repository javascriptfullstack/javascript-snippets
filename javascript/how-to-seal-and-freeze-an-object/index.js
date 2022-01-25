// How to seal and freeze an object

// Start with an object
const person = { firstName: 'John', lastName: 'Doe' }

// Freeze object
Object.freeze(person)

// Let's try to set the first name to a different value
// Error: cannot assign to read only property 'firstName'
person.firstName = 'Drew'

// Create a new variable to set to a different value
let newFirstName = person.firstName
newFirstName = 'Charlie'
console.log(newFirstName) // 'Charlie'
