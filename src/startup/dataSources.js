const EmployeesApi = require('../features/employees/dataSources/employeesAPI')
const UserAddApi = require('../features/employeeAdd/dataSources/userAddApi')
const UserApi = require('../features/user/dataSources/userApi')
const HolidayHistoryApi = require('../features/holidayHistory/dataSources/holidayHistoryApi')
const UserDb = require('../features/user/dataSources/userDb')

module.exports.getDataSources = () => ({
  // Instantiate your data sources here. e.g.: userApi: new UserApi()
  userApi: new UserApi(),
  userDb: new UserDb(),
  employeesApi: new EmployeesApi(),
  userAddApi: new UserAddApi(),
  holidayHistoryApi: new HolidayHistoryApi()
})

module.exports.initializedDataSources = (context, dbInstance, dataSources) => {
  // You need to initialize you datasources here e.g.: dataSources.userApi.initialize({ context })
  dataSources.userApi.initialize({ context })
  dataSources.userDb.initialize({ context: { dbInstance } })
  dataSources.employeesApi.initialize({ context })
  dataSources.UserAddApi.initialize({ context })
  dataSources.holidayHistoryApi.initialize({ context })
  return dataSources
}
