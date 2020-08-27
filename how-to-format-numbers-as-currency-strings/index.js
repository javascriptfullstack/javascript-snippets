// How to format numbers as currency strings

// Create currency number formatter with Internationalization API
const formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
})

// Pass number to format method
const currency = formatter.format(1000)
console.log(currency) // $1,000.00
