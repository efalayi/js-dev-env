import { Router } from 'express'
import getDataFromDB from './data/getDataFromDB'

const router = new Router()

router.get('/api/v1/users', async (req, res) => {
  try {
    const users = await getDataFromDB('users')
    res.json(users)
  } catch (error) {
    res.send({ status: 500, message: error })
  }
})

export default router
