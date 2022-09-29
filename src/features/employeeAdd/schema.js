const { gql } = require('apollo-server-koa')

const userAddDefs = gql`
  type UserAdd {
    id: Int!
    nume: String!
    prenume: String!
    cnp: String!
    email: String
    parola: String
    dataAngajare: String!
    dataNasterii: String!
    serie: String!
    no: String!
    nrTelefon: String!
    esteAdmin: Boolean!
    poza: String
    managerId: Int
  }

  input UserInput {
    nume: String
    prenume: String
    cnp: String
    email: String
    parola: String
    dataAngajare: String
    dataNasterii: String
    serie: String
    no: String
    nrTelefon: String
    esteAdmin: Boolean
    poza: String
    managerId: Int
  }
  type Manager {
    id: Int
    nume: String
    prenume: String
    NumeIntreg: String
  }
  extend type Mutation {
    createUserData(input: UserInput): Boolean!
  }

  extend type Query {
    getManageri: [Manager!]
  }
`
module.exports = userAddDefs
