const ApiRESTDataSource = require('c:/Concediu_GQL/src/utils/apiRESTDataSource')

class VacationsApi extends ApiRESTDataSource {
  constructor() {
    super()
  }
}

// async vacationsData() {
//     const  vacationsData = {id , nume , manager, tipconcediu, inlocuitor, datainceput, datasfarsit, stareconcediu, motivrespingere }
//     return vacationsData
// }

module.exports = VacationsApi
