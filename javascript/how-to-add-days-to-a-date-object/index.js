// How to add days to a date object

// Function takes in a date object and number of days
// Number of days gets added to the date object
// Returns new date
const addDays = (date, days) => {
  const newDate = new Date(date)
  newDate.setDate(newDate.getDate() + days)
  return newDate
}

// Start with a date object
const date = new Date()

// Add three days to current date
const newDate = addDays(date, 3)
console.log(newDate) // 2020-09-10T19:33:58.283Z
