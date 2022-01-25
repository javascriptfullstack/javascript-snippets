// How to play audio in mp3

// Create HTMLAudoElement in JavaScript using Audio() constructor
// Pass url to mp3 file
const audio = new Audio(
  'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3'
)

// Invoke play method on element
audio.play()

// Commonly used audio element properties
console.log(audio.src) // 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3'
console.log(audio.currentTime) // 0
console.log(audio.volume) // 1
