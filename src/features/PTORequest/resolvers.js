const PTORequestResolver = {
  Query: {
    // eslint-disable-next-line no-empty-pattern
    TipuriConcediu: async (_, {}, { dataSources }) => {
      const value = await dataSources.PTORequestApi.getTipuriConcediu()
      return value
    },
    // eslint-disable-next-line no-empty-pattern
    Inlocuitori: async (_, { Id }, { dataSources }) => {
      const value = await dataSources.PTORequestApi.getInlocuitori(Id)
      return value
    },
    ZileConcediu: async (_, { Id }, { dataSources }) => {
      const value = await dataSources.PTORequestApi.getZileConcediu(Id)
      const listaObiecte = []
      for (var key in value) {
        listaObiecte.push({ id: key, nrZile: value[key] })
      }

      return listaObiecte
    }
  },
  Mutation: {
    insertConcediu: async (_, { inputConcediu }, { dataSources }) => {
      const value = await dataSources.PTORequestApi.insertConcediu(inputConcediu)
    }
  }
}
module.exports = PTORequestResolver
