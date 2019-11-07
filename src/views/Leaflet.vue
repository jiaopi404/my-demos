<template>
  <div id="leaflet">
    <h2> this is a leaflet demo </h2>
    <leaflet-comp></leaflet-comp>
  </div>
</template>

<script>
import LeafletComp from '../components/LeafletComp.vue'
export default {
  components: {
    'leaflet-comp': LeafletComp
  }
}
</script>

<style lang="scss" scoped>

</style>
