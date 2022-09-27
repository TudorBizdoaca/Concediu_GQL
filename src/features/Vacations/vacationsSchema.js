const { gql } = require('apollo-server-koa')

const vacationDefs = gql`
  type NumarConcedii {
    nrConcedii: Int!
  }

  type Concedii {
    nume: String
    prenume: String
    numeManager: String
    prenumeManager: String
    idManager: Int
    tipConcediu: String
    numeInlocuitor: String
    prenumeInlocuitor: String
    dataInceput: DateTime
    dataSfarsit: DateTime
    stareConcediu: String
    id: Int!
  }

  extend type Query {
    vacationsData(position: Int, isAdmin: Boolean, id: Int): [Concedii!]
    vacationsNo(isAdmin: Boolean, id: Int): Int
  }
`

module.exports = vacationDefs
