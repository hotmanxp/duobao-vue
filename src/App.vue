<template>
  <div id="app">
    <menu-bar />
    <global-cmp />
    
    <router-view></router-view>
  </div>
</template>

<script>
import menuBar from '@/components/menu-bar'
import globalCmp from '@/components/global-cmp'
// import { messageSvc } from '@/global-service'
export default {
  name: 'app',
  created () {
    let WS = new WebSocket('ws://localhost:3005')
    WS.onopen = () => {
      console.log('connect')
      WS.onmessage = (e) => {
        this.$root.eventHub.$emit('newMessage', e.data)
      }
    }
  },
  components: {
    menuBar,
    globalCmp
  }
}
</script>

<style lang="less">
@import './style.less';
</style>
