import chai, { expect } from 'chai'
import chaiAsPromised from 'chai-as-promised'
import fs from 'fs'
import sinon from 'sinon'
import getDataFromDB from './getDataFromDB'

chai.use(chaiAsPromised)

describe('#getDataFromDB', () => {
  it('should return users from db.json', async () => {
    const readFileSpy = sinon.spy(fs, 'readFile')
    const users = await getDataFromDB('users')
    expect(readFileSpy.called).to.equal(true)
    expect(users).to.be.an('array')
    readFileSpy.restore()
  })
  it('should return empty array if data to be fetched does not exist in db.json', async () => {
    const readFileSpy = sinon.spy(fs, 'readFile')
    const articles = await getDataFromDB('articles')
    expect(readFileSpy.called).to.equal(true)
    expect(articles).to.have.lengthOf(0)
    readFileSpy.restore()
  })
})
