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
import {make} from '@/lib/mock'
import noticeBar from '../../components/top-notice'
import recordList from '../../components/record-list'

const productTemp = {
  prodSrc: idx => `../../static/img/p${idx + 1}.png`,
  price: idx => idx + 50
}
let products = make(productTemp, 6)
let recordTemp = {
  num: idx => idx,
  recordContent: '100元联通充值卡',
  userInfo: {
    nickName: '老亚平',
    from: '山东青岛'
  },
  date: '2017/06/30',
  time: '11:49:59',
  src: idx => `../../static/img/p${idx % 6 + 1}.png`
}
let records = make(recordTemp, 10)
export default {
  name: 'index-page',
  data () {
    let notices = ['恭喜 胡柚获胜2单', '恭喜 胡柚获胜3单', '恭喜 胡柚获胜4单']
    return {
      notices,
      products,
      records,
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
