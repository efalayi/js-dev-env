/* eslint-disable no-console */
import express from 'express'
import compression from 'compression'
import cors from 'cors'
import open from 'open'
import path from 'path'
import chalk from 'chalk'
import webpack from 'webpack'
import webpackDevMiddleware from 'webpack-dev-middleware'
import config from '../webpack.config'
import appRouterMock from './routes/mocks'
import generateMockData from './helpers/generateMockData'

const generateData = async () => {
  console.log(chalk.blueBright('Generating mock data'))
  await generateMockData.mockUsers(3)
}

generateData()

const PORT = 3000
const app = express()
const compiler = webpack(config)

app.use(express.static(path.resolve(__dirname, '../dist')))
app.use(compression())
app.use(cors())
app.use(webpackDevMiddleware(compiler, {
  publicPath: '/',
  writeToDisk: true,
}))

app.use('/', appRouterMock)

app.listen(PORT, (error) => {
  if (error) {
    console.log(error);
  } else {
    console.log('App is running on port: ', PORT)
    open(`http://localhost:${PORT}`)
  }
})
