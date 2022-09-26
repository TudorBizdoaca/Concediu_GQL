const userAddResolvers = {
  Mutation: {
    createUserData: async (_, { input }, { dataSources }, _info) => {
      const data = await dataSources.userAddApi.createUserData(input)
      return data
    }
  }
}

module.exports = userAddResolvers
