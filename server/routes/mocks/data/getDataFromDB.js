import fs from 'fs'

const getDataFromDB = async dataName => new Promise((resolve, reject) => {
  fs.readFile('./server/routes/mocks/data/db.json', (error, data) => {
    if (error) {
      reject(error)
    }
    const database = JSON.parse(data)
    const fetchedData = database[dataName] || []
    resolve(fetchedData)
  })
})

export default getDataFromDB
