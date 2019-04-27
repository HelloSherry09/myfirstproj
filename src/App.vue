<template>
  <div id="app">
    <MyHeader />
    <router-view></router-view>
    <MyFooter />
  </div>
</template>

<script>

import MyHeader from '@/components/Header.vue'
import MyFooter from '@/components/Footer.vue'

export default {
  components: {
    MyHeader,
    MyFooter
  }
}
</script>

<style lang="stylus">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
