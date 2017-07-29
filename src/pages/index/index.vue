<template>
  <div class="index-page page">
    <div class="notice-bar">
      <span class="tips" v-for="tip in notice">{{ tip }}</span>
    </div>
    <div class="banner-part">
      <img src="../../assets/banner-1.jpg" />
    </div>
    <div class="product-info-part">
      <div v-for="pro in products" class="product-box">
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
          <span class="icon"></span>
          <span class="text">参与记录</span>
        </div>
        <div class="divide"></div>
        <div :class="classnames('tab', {active: currentTab === 'win'})" @click="changeTab('win')">
          <span class="icon"></span>
          <span class="text">中奖记录</span>
        </div>
      </div>
      <div class="tab-content-divider"></div>
      <div class="record-container">
        <div class="record" v-for="record in records">
          <div class="timeStamp">
            <div class="date">{{record.date}}</div>
            <div class="time">{{record.time}}</div>
          </div>
          <img class="avator" :src="record.src" />
          <div class="content">
            <div class="user-info">
              <span>{{record.userInfo.nickName}}</span>
              <span>({{record.userInfo.from}})</span>
              </div>
            <div class="win-record">
              <span>夺得</span><span class="hight-light">{{record.num}}</span><span>单 - </span>
              <span class="hight-light">{{record.recordContent}}</span>
            </div>
          </div>
        </div>
      </div>
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
let getProduct = (num) => {
  return Array.from({length: num}).map((i, idx) => ({
    prodSrc: `../../static/img/p${idx + 1}.png`,
    price: idx + 50
  }))
}
let getRecords = (num) => {
  return Array.from({length: num}).map((i, idx) => ({
    num: idx,
    recordContent: '100元联通充值卡',
    userInfo: {
      nickName: '老亚平',
      from: '山东青岛'
    },
    date: '2017/06/30',
    time: '11:49:59',
    src: `../../static/img/p${idx + 1}.png`
  }))
}
export default {
  name: 'index-page',
  data () {
    let products = getProduct(6)
    let records = getRecords(6)
    return {
      notice: ['恭喜 胡柚获胜2单', '恭喜 胡柚获胜3单', '恭喜 胡柚获胜4单'],
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
  }
}
</script>
