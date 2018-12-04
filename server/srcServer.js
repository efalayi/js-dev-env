/* eslint-disable no-console */
import express from 'express'
import open from 'open'
import webpack from 'webpack'
import webpackDevMiddleware from 'webpack-dev-middleware'
import config from '../webpack.config'
import appRouter from './routes'

const PORT = 3000
const app = express()
const compiler = webpack(config)

app.use(webpackDevMiddleware(compiler, {
  publicPath: '/',
  writeToDisk: true,
}))

app.use('/', appRouter)

app.listen(PORT, (error) => {
  if (error) {
    console.log(error);
  } else {
    console.log('App is running on port: ', PORT)
    open(`http://localhost:${PORT}`)
  }
})
