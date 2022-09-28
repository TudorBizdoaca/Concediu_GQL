const userAddResolvers = {
  Mutation: {
    createUserData: async (_, { input }, { dataSources }, _info) => {
      const data = await dataSources.userAddApi.createUserData(input)
      return data
    }
  },
  Query: {
    getManageri: async (_, __, { dataSources }, _info) => {
      const value = await dataSources.userAddApi.getManageri()
      return value.map(row => {
        return {
          ...row,
          NumeIntreg: row.nume + ' ' + row.prenume
        }
      })
    }
  }
}

module.exports = userAddResolvers
