<template>
  <div class="character">
    
    <div class="character__info">
        <h3>  {{ character.name }}</h3>
        <div>
            <span :class="character.status == 'Alive' ? 'alive': character.status == 'Dead' ? 'dead' : 'default' "></span>
            <span>{{character.status}} - {{}}character.species</span> 
        </div>
        <div class="origin">
            <span> Origin: {{character.origin.name }}</span>
        </div>
        <div class="location">
            Location: {{character.location.name}}
        </div>
    </div>
    <img :src="character.image" :alt="character.name">
  </div>
</template>

<script>
export default {
  props: ['character']
}
</script>

<style>

</style>