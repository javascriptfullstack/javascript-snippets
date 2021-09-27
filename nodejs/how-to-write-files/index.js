// Synchronous
const fs = require('fs')
const content = 'JavaScript Full Stack!'
fs.writeFileSync('/path/to/file.txt', content)

// Asynchronous
const fs = require('fs')
const content = 'JavaScript Full Stack!'
fs.writeFile('/path/to/file.txt', content, err => {
  if (err) throw err
})

// Async/Await
const fsPromises = require('fs').promises
const content = 'JavaScript Full Stack!'
await fsPromises.writeFile('/path/to/file.txt', content)
