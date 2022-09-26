const { gql } = require('apollo-server-koa')

const employeesDefs = gql`
  type Employee {
    id: Int!
    nume: String!
    prenume: String!
    poza: String
    email: String!
    nrTelefon: String!
  }

  extend type Query {
    employeesData(position: Int): [Employee!]
  }
`

module.exports = employeesDefs
