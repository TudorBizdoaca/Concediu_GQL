const holidayHistoryResolvers = {
  Query: {
    getIstoricConcedii: async (_, { Id }, { dataSources }, _info) => {
      const data = await dataSources.holidayHistoryApi.getIstoricConcedii(Id)
      return data.map(row => {
        return {
          ...row,
          Inlocuitor: row.inlocuitor ? row.inlocuitor.nume + ' ' + row.inlocuitor.prenume : '',
          Tip: row.tipConcediu ? row.tipConcediu.nume : '',
          Status: row.stareConcediu ? row.stareConcediu.nume : ''
        }
      })
    }
  }
}

module.exports = holidayHistoryResolvers
