<template>
  <div class="win-top-page page has-bottom-tab">
    <div class="list-container">
      <div v-for="item in list" :class="`item flex ${getPriceIcon(item.rand)}`"  :key="item.id ">
        <div v-if="item.rand < 4" class="rand"><span :class="`iconfont icon-${getPriceIcon(item.rand)}`"/></div>
        <div v-if="item.rand > 3" class="rand">{{item.rand}}</div>
        <img :src="item.src" />
        <div class="name">{{item.name}}</div>
        <div class="gray-cl flex-1">已中奖<span class="red-cl">{{item.num}}</span>单</div>
      </div>
    </div>
    <tabs :tabs="tabsData" customClass="history-tab" :current="0" />
  </div>
</template>

<script>
import tabs from '@/components/tabs/tabs'
import api from './api'
const tabsData = [{text: '今日'}, {text: '7日'}, {text: '30日'}]

export default {
  components: {tabs},
  name: 'top-list',
  beforeMount () {
    this.list = api.getTops()
  },
  data () {
    return {
      tabsData,
      list: []
    }
  },
  methods: {
    getPriceIcon: (idx) => {
      const mapObj = {
        1: 'jinpai',
        2: 'yinpai',
        3: 'tongpai'
      }
      return mapObj[idx] || 'others'
    }
  }

}
</script>
