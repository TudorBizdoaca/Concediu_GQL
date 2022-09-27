const { gql } = require('apollo-server-koa')

const holidayHistoryDefs = gql`
  type HolidayHistory {
    Id: Int
    dataInceput: String!
    dataSfarsit: String!
    InlocuitorNume: String!
    InlocuitorPrenume: String!
    Tip: String!
    Status: String!
    MotivRespingere: String
  }
  type Inlocuitor {
    nume: String
    prenume: String
  }
  type TipConcediu {
    id: Int
    nume: String!
  }
  type StareConcediu {
    id: Int
    nume: String!
  }

  extend type Query {
    getIstoricConcedii(Id: Int): [HolidayHistory!]
  }
`

module.exports = holidayHistoryDefs
