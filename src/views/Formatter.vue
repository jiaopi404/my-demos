<template>
  <div>
    <h2>please check the console</h2>
  </div>
</template>

<script>
// import _ from 'lodash'
export default {
  data () {
    return {
      tableData: [],
      formattedData: []
    }
  },
  mounted () {
    this.tableData = this.getRawData()
    this.formattedData = this.dataFormatter(this.tableData.data.data)
  },
  methods: {
    getRawData () {
      return require('../data/formatterData.js').default
    },
    dataFormatter (data) {
      // let res = []
      let childs = {}
      for (let i = 0; i < data.length; i++) {
        if (!data[i].pid || data[i].pid === null) {
          if (!childs['root']) {
            childs['root'] = [data[i]]
          } else {
            childs['root'].push(data[i])
          }
        } else {
          if (!childs[data[i].pid + '']) {
            childs[data[i].pid + ''] = [data[i]]
          } else {
            childs[data[i].pid + ''].push(data[i])
          }
        }
      }

      console.log(childs)
      // return childs
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
