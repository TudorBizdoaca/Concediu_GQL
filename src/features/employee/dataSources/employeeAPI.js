const ApiRESTDataSource = require('../../../utils/apiRESTDataSource')

class EmployeeApi extends ApiRESTDataSource {
  constructor() {
    super()
  }

  async employeeData(IdAngajat) {
    const employeeData = await this.get(`Angajat/GetAngajat?IdAngajat=${IdAngajat}`)

    return employeeData
  }
}

module.exports = EmployeeApi
