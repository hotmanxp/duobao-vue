<template>
  <div class="routes-page page">
    <router-link class="link-btn" tag="div" v-for="route in  routes" :key="route.name" :to="{name: route.name, params: {title: route.cn}}">{{route.cn}}</router-link>
  </div>
</template>

<script>
import {routes} from '@/router/index.js'

export default {
  data () {
    return {
      routes: routes.slice(1, routes.length)
    }
  }
}
</script>
<style lang="less" scoped>
.routes-page {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  .link-btn {
    margin: 10px;
    width: 40vw;
    line-height: 40px;
    color: #fff;
    text-align: center;
    background-color: #e94c55;
    border-radius: 5px;
  }
}
</style>

