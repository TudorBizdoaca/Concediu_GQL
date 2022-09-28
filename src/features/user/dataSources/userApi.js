const ApiRESTDataSource = require('../../../utils/apiRESTDataSource')

class UserApi extends ApiRESTDataSource {
  constructor() {
    super()
  }

  async userData(email) {
    const userData = await this.get(`Autentificare/UtilizatorLogat?email=${email}`)

    return userData
  }

  async authenticateUser(userName, password) {
    const authenticateUser = await this.post(
      `Autentificare/VerificareAutentificare?userName=${userName}&password=${password}`
    )

    return authenticateUser
  }
}

module.exports = UserApi
