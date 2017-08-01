<template>
  <div class='personal-page page'>
    <div class="info-part">
      <img :src="user.avatorSrc" class="avator"/>
      <div class="name-section">
        <span>{{user.name}}</span>
        <span class="icon iconfont icon-bianji"/>
      </div>
      <div class="price-tips">{{`累计获奖: ${user.priceNum}单`}}</div>
    </div>
    <div class="menu-part">
      <div class="divider"></div>
      <div class="menu-section">
        <menu-items text="夺宝记录" icon="yuanbao" :showNext="true" />
        <menu-items text="兑换记录" icon="jixuduihuan" :showNext="true" />
        <menu-items text="总排行榜" icon="jiangpai" :showNext="true" />
      </div>
      <div class="divider"></div>
      <div class="menu-section">
        <menu-items text="设置" icon="shezhi" :showNext="true" />
      </div>
    </div>
  </div>
</template>

<script>
import menuItems from '@/components/menu-item'

export default {
  components: { menuItems },
  data () {
    return {
      user: {
        name: '张晓风',
        priceNum: 1,
        avatorSrc: `../../static/img/p1.png`
      }
    }
  }
}
</script>
