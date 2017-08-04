<template>
  <div class="menu-bar">
    <div class="back control">
      <span class='back-arrow iconfont icon-fanhui'/>
      <span @click="goBack()">Back</span>
      <router-link @click="goBack()" tag="span" to="/">关闭</router-link>
    </div>
    <div class="title">{{ params.title }}</div>
    <div class="menu control"><span class="dot"/><span class="dot"/><span class="dot"/></div>
  </div>
</template>

<script>
import router, { ROUTES } from '@/router'
let params = {}
router.beforeEach((to, from, next) => {
  params.title = ROUTES[to.name].cn
  next()
})

export default {
  name: 'hello',
  data () {
    return {
      params: params
    }
  },
  methods: {
    goBack: () => {
      router.go(-1)
    }
  }
}
</script>

