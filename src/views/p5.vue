<template>
  <div id="p5">
  </div>
</template>

<script>
import P5 from 'p5'
export default {
  data () {
    return {
      p5: null
    }
  },
  created () {},
  mounted () {
    this.init()
    console.log(this.p5)
  },
  methods: {
    init () {
      this.p5 = new P5()
    },
    setup () {
      console.log('3232')
    }
  }
}
</script>

<style lang="scss" scoped>
#p5 {}
</style>
