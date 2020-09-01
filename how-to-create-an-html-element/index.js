// How to create an HTML element

// Start with an element
const div = document.createElement('div')

// Create some text for the element
const text = document.createTextNode('Hello from JavaScript Full Stack!')

// Add text to div
div.appendChild(text)

console.log(div.innerHTML) // Hello from JavaScript Full Stack!
