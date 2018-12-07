import fs from 'fs'

const getDataFromDB = async dataName => new Promise((resolve, reject) => {
  fs.readFile('./server/routes/mocks/data/db.json', (error, data) => {
    if (error) {
      reject(error)
    }
    const database = JSON.parse(data)
    resolve(database[dataName])
  })
})

export default getDataFromDB
