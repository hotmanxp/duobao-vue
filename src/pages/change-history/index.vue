<template>
  <div class='change-history-page page'>
    <div class="tab-parts">
      <tabs :tabs="globalTabs"
        :defaultTabIdx="0"
        customClass="history-tab"
        />    
      <tabs :tabs="subTabs"
        @tabChange="subTabChange"
        :defaultTabIdx="0"
        customClass="triangle-tab"
        />
    </div>
    <div class="history-list">
      <div class="no-result">暂无记录</div>
    </div>
  </div>
</template>

<script>
import tabs from '@/components/tabs/tabs'
import { globalTabs, subTabs } from './consts'

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
      //
    },
    subTabChange: function (idx) {
      //
    }
  }
}
</script>
