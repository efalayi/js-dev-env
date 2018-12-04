import UserFactory from '../database/factories/User'

class UserRepository {
  static getUsers() {
    const users = UserFactory.buildList(3)
    return users
  }
}

export default UserRepository
