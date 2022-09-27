const { gql } = require('apollo-server-koa')

const PTORequestsDefs = gql`
  type Concediu {
    id: Int
    tipConcediuId: Int
    dataInceput: String
    dataSfarsit: String
    inlocuitorId: Int
    comentarii: String
    stareConcediuId: Int
    angajatId: Int
  }
  input inputConcediu {
    id: Int
    tipConcediuId: Int
    dataInceput: String
    dataSfarsit: String
    inlocuitorId: Int
    comentarii: String
    stareConcediuId: Int
    angajatId: Int
  }
  extend type Mutation {
    insertConcediu(input: inputConcediu): Void
  }
  extend type Query {
    TipuriConcediu: [TipConcediu]
  }
  extend type Query {
    Inlocuitori(Id: Int): [Angajat]
  }
  extend type Query {
    ZileConcediu(Id: Int): [ZileConcediu]
  }
  type ZileConcediu {
    id: Int
    nrZile: Int
  }
  type TipConcediu {
    id: Int!
    nume: String
    cod: Int
  }

  type StareConcediu {
    id: Int
    nume: String
    cod: String
  }
  type Angajat {
    id: Int
    nume: String
  }
  type TipuriConcediu {
    tipConcedius: [TipConcediu]
  }
`

module.exports = PTORequestsDefs
