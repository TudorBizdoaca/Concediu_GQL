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

  type EmployeesExtended {
    listaAngajati: [Employee]
    nrAngajati: Int
  }

  extend type Query {
    employeesData(position: Int, query: String): EmployeesExtended
  }
`

module.exports = employeesDefs
