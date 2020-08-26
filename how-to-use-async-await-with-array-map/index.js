// How to use async/await with Array.map()
// Free Dog API: https://dog.ceo/dog-api

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
  console.log(data.message) //dog image urls
}

// Create three promises with map() and async/await
// Resolve promises with Promise.all()
const fetchDogs = async () => {
  const promises = dogUrls.map(async url => await getDogImage(url))
  await Promise.all(promises)
}

fetchDogs()
