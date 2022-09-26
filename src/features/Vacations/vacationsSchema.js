const { gql } = require('apollo-server-koa')

const vacationDefs = gql`

    type NumarConcedii {
    nrConcedii: Int!

    }

    type Concedii{
    nume: String!
    prenume: String!
    numeManager: String!
    prenumeManager: String!
    idManager: Int!
    tipConcediu: String!
    numeInlocuitor: String!
    prenumeInlocuitor: String!
    dataInceput: Date!
    dataSfarsit: Date!
    stareConcediu: String!
    id: Int!
    }

extend type Query listaConcedii{
    lista : [Concedii!]
}
`

module.exports = vacationDefs
