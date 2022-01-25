const fs = require('fs')

const folderDirectory = 'nodejs'

// Method 1: Synchronous with for-each loop
function printFileNames() {
  fs.readdirSync(folderDirectory).forEach(fileame => {
    console.log(fileame)
  })
}

// Method 2: Asynchronous using callback
function printFilenamesAsync() {
  fs.readdir(folderDirectory, (err, filenames) => {
    if (!err) {
      filenames.forEach(name => {
        console.log(name)
      })
    }
  })
}

// Invoke functions
printFileNames()
printFilenamesAsync()
