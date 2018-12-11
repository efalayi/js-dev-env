import { expect } from 'chai'
import fs from 'fs'
import sinon from 'sinon'
import generateMockData from './generateMockData'

describe('#generateMockData', () => {
  describe('#mockUsers', () => {
    it('should call writeFile method', async () => {
      const writeFileSpy = sinon.spy(fs, 'writeFile')
      await generateMockData.mockUsers(3)
      expect(writeFileSpy.called).to.equal(true)
      writeFileSpy.restore()
    })
  })
})
