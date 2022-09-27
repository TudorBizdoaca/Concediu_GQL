const ApiRESTDataSource = require('../../../utils/apiRESTDataSource')

class vacationsApi extends ApiRESTDataSource {
  constructor() {
    super()
  }

  async vacationsData(position, isAdmin, id) {
    const data = this.get(`TabelConcedii/GetConcedii?position=${position}&esteAdmin=${isAdmin}&id=${id}`)
    return data
  }

  // async vacationsData(position, isAdmin, id) {
  //   const vacationsData = this.get(`TabelConcedii/GetConcedii?position=${position}&esteAdmin=${isAdmin}&id=${id}`)

  //   return vacationsData
  // }
  // async vacationsNo(isAdmin, id) {
  //   const vacationsNo = this.get(`TabelConcedii/GetNrConcedii?esteAdmin=${isAdmin}&id=${id}`)

  //   return vacationsNo
  // }
}

module.exports = vacationsApi
