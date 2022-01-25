// How to remove all CSS classes from HTML elements

// Start with an element
const div = document.createElement('div')

// Create some text for the element
const text = document.createTextNode('Hello from JavaScript Full Stack!')

// Add text to div
div.appendChild(text)

// Add class to div
div.setAttribute('class', 'text')

// Print element
console.log(div) // <div class="text">Hello from JavaScript Full Stack!</div>

// Remove all classes from element
div.className = ''

// Print element after removing classes
console.log(div) // <div class="">Hello from JavaScript Full Stack!</div>
