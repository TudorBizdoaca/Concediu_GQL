const { gql } = require('apollo-server-koa')

const holidayHistoryDefs = gql`
  type HolidayHistory {
    id: Int!
    dataInceput: String!
    dataSfarsit: String!
    motivRespingere: String
    Inlocuitor: String!
    Tip: String!
    Status: String!
  }

  extend type Query {
    getIstoricConcedii(Id: Int): [HolidayHistory!]
  }
`

module.exports = holidayHistoryDefs
