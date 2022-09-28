const ApiRESTDataSource = require('../../../utils/apiRESTDataSource')

class detailsApi extends ApiRESTDataSource {
  constructor() {
    super()
  }

  async detailsData(id) {
    const data = await this.get(`http://localhost:5085/api/PaginaDetalii/GetConcediubyId?idConcediu=${id}`)
    return data
  }
}

module.exports = detailsApi
