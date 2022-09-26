const { makeExecutableSchema } = require('@graphql-tools/schema')
const merge = require('lodash.merge')

const { loadTypedefsSync } = require('@graphql-tools/load')
const { GraphQLFileLoader } = require('@graphql-tools/graphql-file-loader')
const { join } = require('path')

const userResolvers = require('../features/user/resolvers')
const userAddDefs = require('../features/user/schema')

const employeeAddResolvers = require('../features/employeeAdd/resolvers')
const employeeAddDefs = require('../features/employeeAdd/schema')

const oldTypeDefs = []
const sources = loadTypedefsSync(join(__dirname, '../**/*.graphql'), {
  loaders: [new GraphQLFileLoader()]
})

const resolvers = merge(userResolvers, employeeAddResolvers)

const typeDefs = [...sources.map(source => source.document), ...oldTypeDefs, userAddDefs, employeeAddDefs]

module.exports = makeExecutableSchema({ typeDefs, resolvers })
module.exports.tests = { typeDefs, resolvers }
