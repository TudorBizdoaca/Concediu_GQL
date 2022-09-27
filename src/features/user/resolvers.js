const { topics, pubSub } = require('../../pubSub')

const userResolvers = {
  Query: {
    userData: async (_, { email }, { dataSources }, _info) => {
      const data = await dataSources.userApi.userData(email)
      return data
    }
  },
  Mutation: {
    authenticateUser: async (_, { userName, password }, { dataSources }, _info) => {
      const data = await dataSources.userApi.authenticateUser(userName, password)
      return data
    }
  },
  Subscription: {
    userChanged: {
      resolve: async (msg, _variables, _context, _info) => {
        return msg.payload
      },
      subscribe: (_parent, _args, _context) => pubSub.asyncIterator(topics.USER_CHANGED)
    }
  }
}

module.exports = userResolvers
