// How to make asynchronous calls in for loops
// Free dog api: https://dog.ceo/dog-api

// Endpoints
const dogUrls = [
  'https://dog.ceo/api/breeds/image/random',
  'https://dog.ceo/api/breed/hound/images/random',
  'https://dog.ceo/api/breed/hound/afghan/images/random',
]

// Fetch dog image
const getDogImage = async url => {
  const res = await fetch(url)
  const data = await res.json()
  document.write(`<img src=${data.message} />`)
}

// Loop through each endpoint using for...of loop
const fetchDogs = async () => {
  for (const url of dogUrls) {
    await getDogImage(url)
  }
}

fetchDogs()
