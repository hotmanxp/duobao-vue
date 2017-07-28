<template>
  <div id="app">
    <menu-bar />
    <router-view></router-view>
  </div>
</template>

<script>
import menuBar from '@/components/menu-bar'
export default {
  name: 'app',
  components: {
    menuBar
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
