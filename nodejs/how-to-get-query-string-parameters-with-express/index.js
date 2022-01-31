const express = require('express')

const app = express()

/**
 * http://localhost:8000/users?age=21
 * Let's assume "age" is our query parameter name
 */
app.get('/users', (req, res) => {
  console.log(`Age: ${req.query.age}`)
  res.status(200).send(`Age: ${req.query.age}`)
})

app.listen(8000)
