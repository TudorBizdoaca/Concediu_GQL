const EmployeesApi = require('../features/employees/dataSources/employeesAPI')
const UserAddApi = require('../features/employeeAdd/dataSources/userAddApi')
const PTORequestApi = require('../features/PTORequest/dataSources/PTORequestApi')
const UserApi = require('../features/user/dataSources/userApi')
const UserDb = require('../features/user/dataSources/userDb')

module.exports.getDataSources = () => ({
  // Instantiate your data sources here. e.g.: userApi: new UserApi()
  userApi: new UserApi(),
  userDb: new UserDb(),
  employeesApi: new EmployeesApi(),
  userAddApi: new UserAddApi(),
  PTORequestApi: new PTORequestApi()
})

module.exports.initializedDataSources = (context, dbInstance, dataSources) => {
  // You need to initialize you datasources here e.g.: dataSources.userApi.initialize({ context })
  dataSources.userApi.initialize({ context })
  dataSources.userDb.initialize({ context: { dbInstance } })
  dataSources.PTORequestApi.initialize({ context })
  dataSources.employeesApi.initialize({ context })
  dataSources.UserAddApi.initialize({ context })
  return dataSources
}
