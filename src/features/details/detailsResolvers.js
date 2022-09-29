const detailsResolvers = {
  Query: {
    detailsData: async (_, { id }, { dataSources }, _info) => {
      const data = await dataSources.detailsApi.detailsData(id)

      return {
        nume: data.angajat?.nume,
        numeManager: data.angajat?.manager?.nume,
        tipConcediu: data.tipConcediu?.nume,
        inlocuitor: data.inlocuitor?.nume,
        stareConcediu: data.stareConcediu?.nume,
        id: data.id,
        dataInceput: data?.dataInceput,
        dataSfarsit: data?.dataSfarsit,
        motivRespingere: data?.motivRespingere,
        comentarii: data?.comentarii
      }
    }
  },
  Mutation: {
    updateStareConcediu: async (_, { input }, { dataSources }) => {
      const data = await dataSources.detailsApi.updateStareConcediu(input)
    }
  }
}

// de terminat
module.exports = detailsResolvers
