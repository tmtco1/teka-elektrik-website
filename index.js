
const express = require('express')
const app = express()
const port = 3000

app.get('/*', (req, res) => {
	res.sendFile(__dirname + req.path)
})

app.get('/', (req, res) => {
	res.sendFile(__dirname + "/index.html")
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
