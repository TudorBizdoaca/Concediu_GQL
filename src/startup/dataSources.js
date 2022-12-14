const EmployeesApi = require('../features/employees/dataSources/employeesAPI')
const UserAddApi = require('../features/employeeAdd/dataSources/userAddApi')
const PTORequestApi = require('../features/PTORequest/dataSources/PTORequestApi')
const UserApi = require('../features/user/dataSources/userApi')
const HolidayHistoryApi = require('../features/holidayHistory/dataSources/holidayHistoryApi')
const UserDb = require('../features/user/dataSources/userDb')
const vacationsApi = require('../features/Vacations/dataSources/vacationsAPI')
const EmployeeApi = require('../features/employee/dataSources/employeeAPI')
const detailsApi = require('../features/details/dataSources/detailsApi')

module.exports.getDataSources = () => ({
  // Instantiate your data sources here. e.g.: userApi: new UserApi()
  userApi: new UserApi(),
  userDb: new UserDb(),
  employeeApi: new EmployeeApi(),
  employeesApi: new EmployeesApi(),
  vacationsApi: new vacationsApi(),
  userAddApi: new UserAddApi(),
  detailsApi: new detailsApi(),
  PTORequestApi: new PTORequestApi(),
  holidayHistoryApi: new HolidayHistoryApi()
})

module.exports.initializedDataSources = (context, dbInstance, dataSources) => {
  // You need to initialize you datasources here e.g.: dataSources.userApi.initialize({ context })
  dataSources.userApi.initialize({ context })
  dataSources.userDb.initialize({ context: { dbInstance } })
  dataSources.PTORequestApi.initialize({ context })
  dataSources.employeeApi.initialize({ context })
  dataSources.employeesApi.initialize({ context })
  dataSources.UserAddApi.initialize({ context })
  dataSources.detailsApi.initialize({ context })
  dataSources.holidayHistoryApi.initialize({ context })
  dataSources.vacationsApi.initialize({ context })
  return dataSources
}
