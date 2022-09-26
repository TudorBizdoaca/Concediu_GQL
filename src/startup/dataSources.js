const EmployeesApi = require('../features/employees/dataSources/employeesAPI')
const UserApi = require('../features/user/dataSources/userApi')
const UserDb = require('../features/user/dataSources/userDb')
const vacationsApi = require('../features/vacations/dataSources/vacationsAPI')

module.exports.getDataSources = () => ({
  // Instantiate your data sources here. e.g.: userApi: new UserApi()
  userApi: new UserApi(),
  userDb: new UserDb(),
  employeesApi: new EmployeesApi(),
  vacationsApi: new vacationsApi()
})

module.exports.initializedDataSources = (context, dbInstance, dataSources) => {
  // You need to initialize you datasources here e.g.: dataSources.userApi.initialize({ context })
  dataSources.userApi.initialize({ context })
  dataSources.userDb.initialize({ context: { dbInstance } })
  dataSources.employeesApi.initialize({ context })
  dataSources.vacationsApi.initialize({ context })
  return dataSources
}
