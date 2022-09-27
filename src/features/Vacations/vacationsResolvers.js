const vacationsResolvers = {
  Query: {
    vacationsData: async (_, { position, isAdmin, id }, { dataSources }, _info) => {
      const data = await dataSources.vacationsApi.vacationsData(position, isAdmin, id)

      return data.map(row => {
        return {
          ...row,
          nume: row.angajat ? row.angajat.nume : 'test',
          prenume: row.angajat.prenume,
          numeManager: row.manager ? row.manager.nume : 'test1',
          prenumeManager: row.manager?.prenume,
          idManager: row.manager ? row.manager.id : 0,
          tipConcediu: row.tipConcediu ? row.tipConcediu.nume : 'test2',
          numeInlocuitor: row.inlocuitor ? row.inlocuitor.nume : 'test3',
          prenumeInlocuitor: row.inlocuitor.prenume,
          stareConcediu: row.stareConcediu ? row.stareConcediu.nume : 'test4'
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
