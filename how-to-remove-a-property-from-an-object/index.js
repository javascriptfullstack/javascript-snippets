// How to remove a property from an object

const person = {
  firstName: 'Jane',
  lastName: 'Doe',
  height: 60,
  weight: 120,
  mood: 'happy',
};

// Method 1: delete operator
delete person.lastName; // remove lastName
console.log(person.hasOwnProperty('lastName')); // false

// Method 2: object destructuring
const { weight, ...newPerson } = person; // also remove weight
console.log(newPerson); // { firstName: 'Jane', height: 60, mood: 'happy' }
