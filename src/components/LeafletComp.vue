<template>
  <div id="leaflet-comp-container">
    <!-- 放地图的div -->
    <div id="leaflet-comp"></div>
    <!-- 切换显示 卫星地图 和 街道地图的按钮 -->
    <button @click="handleClick"> toggle 卫星 / 街道图 </button>
  </div>
</template>

<script>
// 导入 leaflet 包
import L from 'leaflet'
export default {
  name: 'LeafletComp',
  // 可能会接受 pos 属性
  props: ['pos'],
  data () {
    return {
      // 存储 leaflet 地图实例
      mymap: null,
      mapOptions: {
        // 配置项中的 id
        id: 'mapbox.streets',
        // 位置数组
        latlng: []
      }
    }
  },
  mounted () {
    // 挂载时初始化插件
    this.leafletInit()
  },
  methods: {
    // 初始化 leaflet, 创建实例, 绑定到 this.mymap
    leafletInit () {
      // 类似 jQuery 的链式编程
      this.mymap = L.map('leaflet-comp').setView([36.684199, 118.636883], 13)
      this.leafletConfig()
      this.mymap.on('click', this.onMapClick)
      this.leafletAddMarker()
    },
    // 初始化配置leaflet 方法
    leafletConfig () {
      L.tileLayer(
        'https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw',
        {
          maxZoom: 18,
          attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, ' +
            '<a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
            'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
          id: this.mapOptions.id
        }
      ).addTo(this.mymap)
    },
    leafletAddMarker () {
      // marker icon, marker icon shadow 获取不到, 但方法是对的
      L.marker([36.684199, 118.636883]).addTo(this.mymap)
    },
    onMapClick (e) {
      // 点击的事件处理
      console.log('you clicked the map at ' + e.latlng)
    },
    handleClick () {
      // 切换街道地图和卫星地图
      if (this.mapOptions.id === 'mapbox.satellite') {
        this.mapOptions.id = 'mapbox.streets'
      } else {
        this.mapOptions.id = 'mapbox.satellite'
      }
      this.leafletConfig()
    }
  }

}
</script>

<style lang="scss" scoped>
#leaflet-comp {
  height: 600px;
  width: 800px;
  border-radius: 20px;
}
</style>
