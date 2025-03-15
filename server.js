const express = require('express')
const app = express()
const port = 3000

const appName = process.env.APP_NAME

app.use(express.static('public'))

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html')
  console.log(`Request server by ${appName}!`)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})