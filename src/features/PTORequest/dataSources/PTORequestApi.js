const ApiRESTDataSource = require('../../../utils/apiRESTDataSource')

class PTORequestApi extends ApiRESTDataSource {
  constructor() {
    super()
  }
  async getEmployee(id) {
    const data = this.get(`path${id}`) //change path to actual path for the GET request from the API
  }
  async getTipuriConcediu() {
    const data = this.get('InserareConcediu/getTipuriConcediu')
    return data
  }
  async getInlocuitori(Id) {
    const data = this.get(`InserareConcediu/getAngajati?Id=${Id}`)
    return data
  }
  async getZileConcediu(Id) {
    const data = this.get(`InserareConcediu/getZileConcediu?idAngajat=${Id}`)
    return data
  }
  async insertConcediu(inputConcediu) {
    await this.post('InserareConcediu/insertConcediu', inputConcediu)
  }
  // async tipuriConcediu() {
  //   //adauga BASEURL din env + path-ul catre ce este necesar
  //   const userData = await this.get()
  //   return userData
  // }

  // async authenticateUser(userName, password) {
  //   if (userName !== 'Administrator' || password !== 'a') return false
  //   else return true
  // }
}

module.exports = PTORequestApi
