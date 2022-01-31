const fs = require('fs')

const path = 'index.js'

// Synchronous
function readFile() {
  const fileAsString = fs.readFileSync(path, 'utf8')
  const json = JSON.parse(fileAsString)
  console.log('JSON: ', json)
}

// Asynchronous
function readFileAsync() {
  fs.readFile(path, 'utf8', (err, fileAsString) => {
    if (err) throw err
    const json = JSON.parse(fileAsString)
    console.log('JSON: ', json)
  })
}

// Invoke functions
_ = readFile()
_ = readFileAsync()
