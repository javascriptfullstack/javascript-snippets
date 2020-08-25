// How to chain array methods

// Start with array of objects
const vehicles = [
  { type: 'car', brand: 'Tesla', color: 'red', price: 50000 },
  { type: 'car', brand: 'Toyota', color: 'blue', price: 20000 },
  { type: 'truck', brand: 'Ford', color: 'green', price: 40000 },
  { type: 'SUV', brand: 'Nissan', color: 'beige', price: 35000 },
  { type: 'car', brand: 'Tesla', color: 'gray', price: 80000 },
]

vehicles
  // filter() returns vehicles that are cars and has a price greater than 20000
  .filter(vehicle => vehicle.type === 'car' && vehicle.price > 20000)
  // sort() returns vehicles from least to greatest
  .sort((vehicle1, vehicle2) => vehicle1.price - vehicle2.price)
  // map() logs the remaining vehicle''s color, brand, type, and price to the console
  .map(vehicle =>
    // red Tesla car is $50000.00
    // gray Tesla car is $80000.00
    console.log(
      `${vehicle.color} ${vehicle.brand} ${
        vehicle.type
      } is $${vehicle.price.toFixed(2)}`
    )
  )
