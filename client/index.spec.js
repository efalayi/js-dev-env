import fs from 'fs'
import { JSDOM } from 'jsdom'

describe('#basic test', () => {
  it('should run test', () => {
    console.log('Test ran successfully')
  })

  it('should load index.html', () => {
    const indexHTML = fs.readFileSync('./client/index.html', 'utf-8')
    const { window } = new JSDOM(indexHTML)
    const [headingTag] = window.document.getElementsByTagName('h2')
    expect(headingTag.innerHTML).toEqual('A JavaScript Development Environment')
    window.close()
  })
})
