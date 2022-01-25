// How to generate a random number within a specific range

const generateRandomInteger = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min)
}

// Pass min and max
const rand = generateRandomInteger(5, 10)
console.log(rand) // 7
