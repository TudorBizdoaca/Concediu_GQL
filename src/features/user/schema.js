const { gql } = require('apollo-server-koa')

const userDefs = gql`
  type UserInfo {
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
    userData(email: String!): UserInfo!
  }

  extend type Mutation {
    authenticateUser(userName: String!, password: String!): Boolean!
  }
  # Not working! Only for demonstration
  extend type Subscription {
    userChanged: String
  }
`

module.exports = userDefs
