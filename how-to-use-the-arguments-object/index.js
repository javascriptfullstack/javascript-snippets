// How to use the arguments object

function sum() {
  let total = 0

  // arguments is an array-like object that is accessible inside functions
  for (let i = 0, len = arguments.length; i < len; ++i) {
    total += arguments[i]
  }

  return total
}

console.log(sum(23, 10, 7)) // returns 40
