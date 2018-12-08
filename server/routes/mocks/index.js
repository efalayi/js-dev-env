import { Router } from 'express'
import userRouter from './user'

const appRouter = new Router()

appRouter.get('/', (req, res) => {
  res.sendFile('index.html')
})

appRouter.get('/api/v1', (req, res) => {
  res.send({ message: 'Welcome to JS-DEV-ENV API Gateway Platform' })
})

appRouter.use(userRouter)

export default appRouter
