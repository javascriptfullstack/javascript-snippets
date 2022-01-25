// How to set default parameter values for a function

// Function with default values for brand and color
// If no value or undefined is passed as a parameter, the default values will be used
function createVehicle(type, brand = 'Toyota', color = 'blue', price) {
  return {
    type,
    brand,
    color,
    price,
  }
}

// Create a vehicle providing all parameters
const car = createVehicle('car', 'Tesla', 'red', 80000)
console.log(car) // { type: 'car', brand: 'Tesla', color: 'red', price: 80000 }

// Create a vehicle providing only type and price
const truck = createVehicle('truck', undefined, undefined, 40000)
console.log(truck) // { type: 'truck', brand: 'Toyota', color: 'blue', price: 40000 }
