<template>
  <div class="index-page page">
    <notice-bar :notices="notices" />
    <div class="banner-part">
      <img src="../../assets/banner-1.jpg" />
    </div>
    <div class="product-info-part">
      <div v-for="pro in products" class="product-box" :key="pro.prodSrc">
        <img :src="pro.prodSrc" />
        <div class="price-info">
          <span>多报价：Y</span>
          <span class="price">{{pro.price}}</span>
        </div>
      </div>
    </div>
    <div class="record-part">
      <div class="tab-part">
        <div :class="classnames('tab', {active: currentTab === 'participate'})" @click="changeTab('participate')">
          <span class="icon iconfont icon-dingdan"></span>
          <span class="text">参与记录</span>
        </div>
        <div class="divide"></div>
        <div :class="classnames('tab', {active: currentTab === 'win'})" @click="changeTab('win')">
          <span class="icon iconfont icon-jiangpai"></span>
          <span class="text">中奖记录</span>
        </div>
      </div>
      <div class="tab-content-divider"></div>
      <record-list :records="records" />
    </div>
    <div class="notice-bottom">
      <span>下期开奖时间：</span>
      <span>{{next.mins}}分</span>
      <span>{{next.second}}秒</span>
    </div>
  </div>
</template>

<script>
import classnames from 'classnames'
import api from './api'
import noticeBar from '../../components/top-notice'
import recordList from '../../components/record-list'

export default {
  name: 'index-page',
  async mounted () {
    this.records = await api.getRecord()
    this.products = await api.getProduct()
  },
  data () {
    let notices = ['恭喜 胡柚获胜2单', '恭喜 胡柚获胜3单', '恭喜 胡柚获胜4单']
    return {
      notices,
      products: [],
      records: [],
      currentTab: 'win',
      next: {
        mins: 35,
        second: 32
      }
    }
  },
  methods: {
    classnames: classnames,
    changeTab: function (tab) {
      if (tab !== this.currentTab) this.currentTab = tab
    }
  },
  components: {
    noticeBar,
    recordList
  }
}
</script>
