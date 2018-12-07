import chalk from 'chalk'
import fs from 'fs'
import UserFactory from '../database/factories/User'

const convertToJSONData = (dataName, payload) => {
  const jsonData = {}
  jsonData[dataName] = payload
  return JSON.stringify(jsonData, null, 2)
}

const mockUsers = async (numberOfUsers) => {
  const users = UserFactory.buildList(numberOfUsers)
  const jsonData = convertToJSONData('users', users)
  await fs.writeFile('./server/routes/mocks/data/db.json', jsonData, (error) => {
    if (error) {
      console.log(chalk.red(error))
    }
    console.log(chalk.green('Users mock data generated'))
  })
}

export default {
  mockUsers,
}
