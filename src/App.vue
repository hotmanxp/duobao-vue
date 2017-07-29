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

<style lang="less">
@import './style.less';
</style>
