// How to make an HTTP get request
// Free dog API: https://dog.ceo/dog-api/

// Start with an endpoint
const url = 'https://dog.ceo/api/breeds/image/random'

// Use fetch to make an HTTP request
// Use async/await for asynchronous calls
const getRandomDog = async url => {
  const res = await fetch(url)
  const data = await res.json()
  console.log(data)
  /* 
  {
    message: 'https://images.dog.ceo/breeds/malinois/n02105162_10309.jpg',
    status: 'success'
  }
  */
}

getRandomDog(url)
