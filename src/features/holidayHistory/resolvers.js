const holidayHistoryResolvers = {
  Query: {
    getIstoricConcedii: async (_, { Id }, { dataSources }, _info) => {
      const data = await dataSources.holidayHistoryApi.getIstoricConcedii(Id)
      return data
    }
  }
}

module.exports = holidayHistoryResolvers
