const ApiRESTDataSource = require('../../../utils/apiRESTDataSource')

class HolidayHistoryApi extends ApiRESTDataSource {
  constructor() {
    super()
  }

  async getIstoricConcedii(Id) {
    let data = await this.get(`/IstoricConcedii/GetConcediiAngajat?Id=${Id}`)
    return data
  }
}
module.exports = HolidayHistoryApi
