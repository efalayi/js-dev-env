import Chance from 'chance'
import { Factory } from 'rosie'

const chance = new Chance()

const user = new Factory()
  .sequence('id').attrs({
    firstName: () => chance.first(),
    lastName: () => chance.last(),
    email: () => chance.email(),
    gender: () => chance.gender(),
  })

export default user
