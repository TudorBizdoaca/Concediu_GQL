const ApiRESTDataSource = require('../../../utils/apiRESTDataSource')

class UserAddApi extends ApiRESTDataSource {
  constructor() {
    super()
  }

  async createUserData(input) {
    let result = undefined
    try {
      await this.post('/PaginaInregistrare/InsertAngajat', input)
    } catch (error) {
      result = false
    }
    if (result == undefined) result = true

    return result
  }

  async getManageri() {
    let data = await this.get('/PaginaInregistrare/GetManageri')
    return data
  }
}
module.exports = UserAddApi
