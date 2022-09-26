const employeesResolvers = {
  Query: {
    employeesData: async (_, { position, query }, { dataSources }, _info) => {
      const data = await dataSources.employeesApi.employeesData(position, query)

      return data
    }
  }
}

module.exports = employeesResolvers
