import { Router } from 'express'
import userRepository from '../repositores/userRepository'

const router = new Router()

router.get('/api/v1/users', (req, res) => {
  const users = userRepository.getUsers()
  res.json(users)
})

export default router
