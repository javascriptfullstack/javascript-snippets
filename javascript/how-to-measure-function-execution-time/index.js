// How to measure function execution time

// Start with a function
const run = () => {
  console.log('Running')
}

// Method 1: performance.now()
const start = performance.now()

run()

const end = performance.now()

console.log(`Function took ${end - start} milliseconds`) // Function took 0.2049999966402538 milliseconds

// Method 2: console.time
console.time('run')

run()

console.timeEnd('run') // run: 0.05517578125ms
