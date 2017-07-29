<template>
  <div class="menu-bar">
    <div class="back control">
      <span class='back-arrow iconfont icon-fanhui'/>
      <span>Back</span>
    </div>
    <div class="title">{{ title }}</div>
    <div class="menu control"><span class="dot"/><span class="dot"/><span class="dot"/></div>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      title: '首页'
    }
  }
}
</script>

