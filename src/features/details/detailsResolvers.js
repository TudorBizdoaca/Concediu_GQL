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
  }
}

// de terminat
module.exports = detailsResolvers
