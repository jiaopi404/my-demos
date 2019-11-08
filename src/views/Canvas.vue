<template>
  <div id="canvas">
    <div class="canvs-menu">
      <ul>
        <li>hello</li>
      </ul>
    </div>
    <div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import CanvasMenu from '../canvas/menu'
export default {
  data () {
    return {
      ctx: null
    }
  },
  created () {},
  mounted () {
    console.log(CanvasMenu)
  },
  methods: {
  }
}
</script>

<style lang="scss" scoped>
#canvas-demo {
  border: 2px solid #ff3040;
}
</style>
