<template>
 
  <div>
    <h1>Rick and Morty Web</h1>
    <!--se integra el componente-->
    <FilterByStatus/>
    <FilterByName/>
    <ListCharacters/>
    
  </div>
</template>

<script>
//se importan los componentes integrando la direccion del archivo en components
import ListCharacters from '@/components/ListCharacters'
import FilterByStatus from '@/components/FilterByStatus'
import FilterByName from '@/components/FilterByName'

//se exporta luego como un componente
export default {
  name: 'App',
  components: {
    ListCharacters,
    FilterByStatus,
    FilterByName
  }
}
</script>


<style lang="scss">
//estilos agregados
:root {
  --background-body: #24282F;
  --background-card: #3C3E44;
  --text-white: #FFFFFF;
  --text-gray: #c0c0c0;
  --text-orange: #FF9800;
}
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  
}
body {
  background-color: var(--background-body);
  color: var(--text-white);
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}
h1 {
  margin-bottom: 3rem;
  text-align: center;
}
.container {
  width: 980px;
  max-width: 90%;
  margin: 5rem auto;
  
}
img {
  width: 100%;
}

</style>
