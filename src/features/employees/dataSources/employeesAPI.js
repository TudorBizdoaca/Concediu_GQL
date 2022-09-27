const ApiRESTDataSource = require('../../../utils/apiRESTDataSource')

class EmployeesApi extends ApiRESTDataSource {
  constructor() {
    super()
  }

  async employeesData(position, query) {
    const employeesData = await this.get(`Angajat/GetTotiAngajatii?position=${position}&query=${query}`)

    return employeesData
  }
}

module.exports = EmployeesApi
