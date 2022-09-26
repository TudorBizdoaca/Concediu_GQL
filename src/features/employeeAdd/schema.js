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
  }

  extend type Mutation {
    createUserData(input: UserInput): Boolean!
  }
`
module.exports = userAddDefs
