<template>
  <div class="setting-page page">
    <div class="menu-group">
      <menu-items text="玩法介绍" icon="jingqujieshao" toLink="d" />
      <menu-items text="关于PK夺宝" icon="guanyu" toLink="d" />
    </div>
  </div>
</template>

<script>
import menuItems from '@/components/menu-item'
export default {
  components: { menuItems }
}
</script>
<style lang="less" scoped>
.setting-page {
  .menu-group {
    padding-top: 15px;
  }
}
</style>

