import express from 'express'
import path from 'path'
import open from 'open'

const PORT =  3000
const app = express()

app.get('/', (req, res) => {
  console.log('app running on port: ', PORT)
  res.sendFile(path.join(__dirname, '../src/index.html'))
})

app.listen(PORT, (error) => {
  if (error) {
    console.log(error);
  } else {
    open('http://localhost:' + PORT)
  }
})