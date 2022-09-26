const employeesResolvers = {
  Query: {
    employeesData: async (_, { position }, { dataSources }, _info) => {
      const data = await dataSources.employeesApi.employeesData(position)

      return data
    }
  }
}

module.exports = employeesResolvers
