<!--Componente para mostrar la lista completa de personajes de rick and morty-->
<template>
  <section>
    <div class="characters">
      <!--iteración de personajes mediante un v-for al componente de CardCharacter-->
      <div class="characters__item" v-for="character in characters" :key="character.id">
        <CardCharacter :character="character" />
      </div>
    </div>
  </section>
</template>

<script>
import { computed, onMounted } from 'vue'
import {useStore} from 'vuex'
import CardCharacter from '@/components/CardCharacter'

export default {
    
    components: {
        CardCharacter
    },

    setup() {
        const store = useStore()
        //se obtienen la lista de los personajes filtrados para ser iterados, dentro del template
        const characters = computed(() => {
            return store.state.charactersFilter
        })
        onMounted(() => {
            store.dispatch('getCharacters')
        })
        return {
            characters
        }
    }
}
</script>

<style lang="scss">
.characters {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 3rem;
  margin: 3rem 0;
  //margen o espacio entre el borde de la pagina y el grid
  padding-left: 3%;
  padding-right: 3%;
}
</style>