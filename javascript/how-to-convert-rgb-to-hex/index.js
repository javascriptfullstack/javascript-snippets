// How to convert RGB to hex and vice versa

// Function that converts each RGB value to hex value using map() and ternary
const rgbToHex = (red, green, blue) =>
  '#' +
  [red, green, blue]
    .map(value => {
      const hex = value.toString(16)
      return hex.length === 1 ? '0' + hex : hex
    })
    .join('')

// Function that converts each RGB value to hex value using map() and padStart()
const rgbToHexPadStart = (red, green, blue) =>
  '#' + [red, green, blue].map(x => x.toString(16).padStart(2, '0')).join('')

// Function that uses Regex to convert hex values to RGB values
const hexToRgb = hex =>
  hex
    .replace(
      /^#?([a-f\d])([a-f\d])([a-f\d])$/i,
      (red, green, blue) => '#' + red + red + green + green + blue + blue
    )
    .substring(1)
    .match(/.{2}/g)
    .map(x => parseInt(x, 16))

// Start with RGB values
const red = 15
const green = 37
const blue = 253

// Convert to hex
const hex = rgbToHex(15, 37, 253)
console.log(hex) // #0f25fd

// Convert to hex with padStart()
const hexPadStart = rgbToHex(15, 37, 253)
console.log(hexPadStart) // #0f25fd

// Convert back to RGB
const rgb = hexToRgb(hex)
console.log(rgb) // [ 15, 37, 253 ]
