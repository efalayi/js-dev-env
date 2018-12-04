import { Router } from 'express'
import path from 'path'
import userRouter from './user'

const appRouter = new Router()

appRouter.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../../client/index.html'))
})

appRouter.get('/api/v1', (req, res) => {
  res.send({ message: 'Welcome to JS-DEV-ENV API Gateway Platform' })
})

appRouter.use(userRouter)

export default appRouter
