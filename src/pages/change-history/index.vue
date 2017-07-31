<template>
  <div class='change-history-page page'>
    <div class="tab-parts">
      <tabs :tabs="globalTabs" @tabChange="globalTabChange" :current="globalCurrentTab" customClass="history-tab" />    
      <tabs :tabs="subTabs" @tabChange="subTabChange" :current="subCurrentTab" customClass="triangle-tab" />
    </div>
    <div class="history-list">
      <div class="no-result">暂无记录</div>
    </div>
  </div>
</template>

<script>
import tabs from '@/components/tabs/tabs'

const globalTabs = [{text: '未兑换', value: 'noChange'}, {text: '已兑换', value: 'changed'}]
const subTabs = [{text: '全部', value: 'all'}, {text: '京东充值卡', value: 'jd'}, {text: '联通充值卡', value: 'lt'}, {text: '中国石化充值卡', value: 'zgsh'}]

export default {
  components: {tabs},
  data () {
    return {
      globalTabs,
      subTabs,
      globalCurrentTab: 0,
      subCurrentTab: 0
    }
  },
  methods: {
    globalTabChange: function (idx) {
      this.globalCurrentTab = idx
    },
    subTabChange: function (idx) {
      this.subCurrentTab = idx
    }
  }
}
</script>

<style lang="less" scoped>

</style>
