import { createStore } from 'vuex'

export default createStore({
  state: {
    //integración de "variable" para  obtener la lista completa de personajes
    characters: [],
    //"variable" para obtener a lista de personajes pero filtrados
    charactersFilter: []
  },
  mutations: {
    //ingración de funcion para poder modificar la lista de personajes completa, y la que es filtrada
    setCharacters(state, payload){
      state.characters = payload
    },
    setCharactersFilter(state, payload){
      state.charactersFilter = payload
    }
  },
  actions: {
    //funciones programadas
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
    },
    //funcion o accion para filtrar los personajes respecto a su estado de "vida"
    FilterByStatus({commit, state}, statusExt){
      const results = state.characters.filter((character) => {
        return character.status.includes(statusExt)
      })
      commit('setCharactersFilter', results)
    },
    //accion para filtrar los personajes en base a su nombre
    FilterByName({commit, state}, name) {
      const formatName = name.toLowerCase()

      const results = state.characters.filter((character) => {
        const characterName = character.name.toLowerCase()

        if(characterName.includes(formatName)){
          return character
        }

      })
      commit('setCharactersFilter', results)
    }



  },
  modules: {
  }
})
