<template>
  <div id="canvas">
    <h2> this is a canvas demo</h2>
    <button @click="handleClickDraw"> draw </button>
    &nbsp;&nbsp;&nbsp;
    <button @click="handleClickClear"> clear </button>
    <br />
    <canvas id="canvas-demo" width="600px" height="400px"></canvas>
  </div>
</template>

<script>
export default {
  data () {
    return {
      ctx: null
    }
  },
  created () {},
  mounted () {
    this.ctx = document.getElementById('canvas-demo').getContext('2d')
  },
  methods: {
    handleClickDraw () {
      this.ctx.fillStyle = 'rgb(200, 0, 0)'
      this.ctx.fillRect(20, 20, 100, 100)

      this.ctx.fillStyle = 'rgba(0, 0, 200, .3)'
      this.ctx.fillRect(40, 40, 100, 100)
    },
    handleClickClear () {
      this.ctx.fillStyle = 'rgb(255, 255, 255)'
      this.ctx.fillRect(0, 0, 600, 400)
    }
  }
}
</script>

<style lang="scss" scoped>
#canvas-demo {
  border: 2px solid #ff3040;
}
</style>
