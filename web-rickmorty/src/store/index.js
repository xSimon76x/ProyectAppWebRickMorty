import { createStore } from 'vuex'

export default createStore({
  state: {
    //integración de variable para  obtener la lista completa de personajes
    characters: [],
    //variable para obtener a lista de personajes pero filtrados
    charactersFilter: []
  },
  mutations: {
    setCharacters(state, payload){
      state.characters = payload
    },
    setCharactersFilter(state, payload){
      state.charactersFilter = payload
    }
  },
  actions: {
    async getCharacters({commit}) {
      try {
        const response = await fetch('https://rickandmortyapi.com/api/character');
        const data = await response.json()
        console.log(data)
        commit('setCharacters', data.results)
        commit('setCharactersFilter', data.results)
      } catch (error) {
        console.error(error)
      }
    }
  },
  modules: {
  }
})
