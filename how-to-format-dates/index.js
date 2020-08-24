// How to format date objects

// Start with a date object
const date = new Date()

// Get date components using Intl.DateTimeFormat()
const year = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(date)
const month = new Intl.DateTimeFormat('en', { month: 'short' }).format(date)
const day = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(date)

// Custom formats
console.log(`${day}-${month}-${year}`) // 24-Aug-2020
console.log(`${month} ${day}, ${year}`) // Aug 24, 2020
