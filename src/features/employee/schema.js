const { gql } = require('apollo-server-koa')

const employeeDefs = gql`
  type Employee {
    id: Int!
    nume: String!
    prenume: String!
    email: String!
    parola: String!
    dataAngajare: DateTime!
    dataNasterii: DateTime!
    cnp: String!
    serie: String!
    no: String!
    nrTelefon: String!
    poza: String
    esteAdmin: Boolean
    managerId: Int
    zileConcediu: Int!
  }

  extend type Query {
    employeeData(IdAngajat: Int): Employee
  }
`

module.exports = employeeDefs
