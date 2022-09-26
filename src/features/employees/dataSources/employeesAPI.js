const ApiRESTDataSource = require('../../../utils/apiRESTDataSource')

class EmployeesApi extends ApiRESTDataSource {
  constructor() {
    super()
  }

  async employeesData(position) {
    const employeesData = this.get(`Angajat/GetTotiAngajatii?position=${position}`)

    return employeesData
  }
}

module.exports = EmployeesApi
