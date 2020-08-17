// How to make the first letter in a string uppercase

const upperCaseFirstLetter = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

const newString = upperCaseFirstLetter('hello');

console.log(newString); // Hello
