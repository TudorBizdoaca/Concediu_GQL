const { gql } = require('apollo-server-koa')

const detailsDefs = gql`
  type Concediul {
    comentarii: String
    nume: String
    numeManager: String
    tipConcediu: String
    inlocuitor: String
    dataInceput: DateTime
    dataSfarsit: DateTime
    stareConcediu: String
    id: Int!
    motivRespingere: String
  }
  input DetailsInput {
    id: Int
    stareConcediuId: Int
  }
  extend type Query {
    detailsData(id: Int): Concediul
  }

  extend type Mutation {
    updateStareConcediu(input: DetailsInput): Void
  }
`
module.exports = detailsDefs
