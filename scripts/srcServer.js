/* eslint-disable no-console */
import express from 'express'
import path from 'path'
import open from 'open'
import webpack from 'webpack'
import webpackDevMiddleware from 'webpack-dev-middleware'
import config from '../webpack.config'

const PORT = 3000
const app = express()
const compiler = webpack(config)

app.use(webpackDevMiddleware(compiler, {
  publicPath: '/',
  writeToDisk: true,
}))

app.get('/', (req, res) => {
  console.log('app running on port: ', PORT)
  res.sendFile(path.join(__dirname, '../src/index.html'))
})

app.listen(PORT, (error) => {
  if (error) {
    console.log(error);
  } else {
    open(`http://localhost:${PORT}`)
  }
})
