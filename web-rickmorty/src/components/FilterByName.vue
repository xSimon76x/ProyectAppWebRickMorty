<!--Componente para filtrar por nombre-->
<template>
  <div class="search">
      <input 
        type="text" 
        placeholder="Buscar por Nombre"
        v-model="nameInput"
        @keyup="filter()">
  </div>
</template>

<script>
import { ref } from 'vue'
import { useStore } from 'vuex'

export default {
    setup() {
        const store = useStore()
        const nameInput = ref('')

        const filter = () => {
            store.dispatch('FilterByName', nameInput.value)
        }

        return {
            nameInput,
            filter
        }
    }
}
</script>

<style lang="scss">
.search {
  width: 400px;
  margin: 3rem auto 0;
  input {
    height: 53px;
    width: 400px;
    border: none;
    border-radius: 10px;
    padding: 0 0.5rem;
  }
}
</style>