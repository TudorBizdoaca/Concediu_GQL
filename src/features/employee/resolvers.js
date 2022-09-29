const employeeResolvers = {
  Query: {
    employeeData: async (_, { IdAngajat }, { dataSources }, _info) => {
      const data = await dataSources.employeeApi.employeeData(IdAngajat)

      return data
    }
  }
}

module.exports = employeeResolvers
