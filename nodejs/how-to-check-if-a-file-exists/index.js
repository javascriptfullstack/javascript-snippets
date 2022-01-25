const fs = require('fs')

const path = 'index.js'

// Method 1: Synchronous
function doesFileExist(path) {
  const exists = fs.existsSync(path)
  if (exists) {
    console.log('File exists')
    return true
  }

  console.log('File does not exist')
  return false
}

// Method 2: Asynchronous using async/await
async function doesFileExistAsyncAwait(path) {
  try {
    await fs.promises.access(path)
    console.log('File exists')
    return true
  } catch (err) {
    console.log('File does not exist')
    console.log(err)
    return false
  }
}

// Method 3: Asynchronous using callback
async function doesFileExistCallback(path) {
  fs.access(path, err => {
    if (!err) {
      console.log('File exists')
      return true
    }

    console.log('File does not exist')
    console.log(err)
    return false
  })
}

// Invoke functions
_ = doesFileExist(path)
_ = doesFileExistAsyncAwait(path)
_ = doesFileExistCallback(path)
