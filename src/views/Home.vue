<template>
  <div id="home">
    i am home view
    <ul>
      <li>
        <router-link to="/leaflet">1. view leaflet</router-link>
      </li>
      <li>
        <router-link to="/canvas">2. canvas demos</router-link>
      </li>
      <li>
        <router-link to="/formatter">3. data formatter</router-link>
      </li>
      <li>
        <router-link to="/p5">4. p5</router-link>
      </li>
    </ul>
    <h4>1. 可编辑 div, span</h4>
    <div
      class="edit-field"
      :contenteditable="editable"
      @change="handleChange(el)"
      @click="handleClick"
      @input="handleInput"
    >
      hello there
    </div>
  </div>
</template>

<script>
export default {
  name: 'home',
  components: {
  },
  data () {
    return {
      editable: true
    }
  },
  created () {
  },
  methods: {
    handleChange () {
    },
    handleClick () {
      // console.dir(this.doc.querySelector('.edit-field'))
    },
    handleInput ($event) {
      $event.target.innerHTML = $event.target.innerText
    }
  }
}
</script>

<style lang="scss" scoped>
#home{
  .edit-field {
    border: 1px dashed #999;
    border-radius: 10px;
    width: 200px;
    height: 80px;
  }
}
</style>
