// How to wait or create a delay

// Delay function using setTimeout()
const delay = milliseconds => {
  return new Promise(resolve => setTimeout(resolve, milliseconds))
}

// Asynchronous function creating two second delays between logs
const run = async () => {
  console.log('Waiting two seconds...')

  await delay(2000)
  console.log('Wait another two seconds...')

  await delay(2000)
  console.log('Done')
}

run()
