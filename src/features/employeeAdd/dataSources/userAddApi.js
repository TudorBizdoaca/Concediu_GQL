const ApiRESTDataSource = require('../../../utils/apiRESTDataSource')

class UserAddApi extends ApiRESTDataSource {
  constructor() {
    super()
  }

  async createUserData(input) {
    let result
    try {
      await this.post('/PaginaInregistrare/InsertAngajat', { ...input })
    } catch (error) {
      result = false
    }
    result = true

    return result
  }
}
module.exports = UserAddApi
