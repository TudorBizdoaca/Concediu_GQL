const vacationsResolvers = {
  Query: {
    vacationsData: async (_, { position, isAdmin, id }, { dataSources }, _info) => {
      const data = await dataSources.vacationsApi.vacationsData(position, isAdmin, id)

      return data.map(row => {
        return {
          nume: row.angajat?.nume + ' ' + row.angajat?.prenume,
          numeManager: row.angajat.manager?.nume + ' ' + row.angajat.manager?.prenume,
          idManager: row.angajat.manager?.id,
          tipConcediu: row.tipConcediu?.nume,
          numeInlocuitor: row.inlocuitor?.nume + '' + row.inlocuitor?.prenume,
          stareConcediu: row.stareConcediu?.nume,
          id: row.id,
          dataInceput: row?.dataInceput,
          dataSfarsit: row?.dataSfarsit
        }
      })
    },
    vacationsNo: async (_, { isAdmin, id }, { dataSources }, _info) => {
      const data = await dataSources.vacationsApi.vacationsNo(isAdmin, id)

      return data
    }
  }
}

module.exports = vacationsResolvers
