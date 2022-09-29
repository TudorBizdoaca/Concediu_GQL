const { makeExecutableSchema } = require('@graphql-tools/schema')
const merge = require('lodash.merge')

const { loadTypedefsSync } = require('@graphql-tools/load')
const { GraphQLFileLoader } = require('@graphql-tools/graphql-file-loader')
const { join } = require('path')

const userResolvers = require('../features/user/resolvers')
const userAddDefs = require('../features/user/schema')

const employeeAddResolvers = require('../features/employeeAdd/resolvers')
const employeeAddDefs = require('../features/employeeAdd/schema')

const vacationsResolvers = require('../features/Vacations/vacationsResolvers')
const vacationDefs = require('../features/Vacations/vacationsSchema')

const detailsResolvers = require('../features/details/detailsResolvers')
const detailsDefs = require('../features/details/detailsSchema')

const employeeResolvers = require('../features/employee/resolvers')
const employeeDefs = require('../features/employee/schema')

const employeesResolvers = require('../features/employees/resolvers')
const employeesDefs = require('../features/employees/schema')

const holidayHistoryResolvers = require('../features/holidayHistory/resolvers')
const holidayHistoryDefs = require('../features/holidayHistory/schema')

const PTORequestResolver = require('../features/PTORequest/resolvers')
const PTORequestsDefs = require('../features/PTORequest/schema')
const oldTypeDefs = []
const sources = loadTypedefsSync(join(__dirname, '../**/*.graphql'), {
  loaders: [new GraphQLFileLoader()]
})

const resolvers = merge(
  userResolvers,
  employeeResolvers,
  employeesResolvers,

  employeeAddResolvers,

  PTORequestResolver,

  vacationsResolvers,
  detailsResolvers,
  holidayHistoryResolvers
)

const typeDefs = [
  ...sources.map(source => source.document),

  ...oldTypeDefs,

  userAddDefs,
  detailsDefs,
  employeeAddDefs,

  employeeDefs,
  employeesDefs,
  holidayHistoryDefs,
  PTORequestsDefs,
  vacationDefs
]

module.exports = makeExecutableSchema({ typeDefs, resolvers })
module.exports.tests = { typeDefs, resolvers }
