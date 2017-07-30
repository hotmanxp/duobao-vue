<template>
  <div class="details-page page">
    <notice-bar :notices="['通知： 每天凌晨2点 谢谢谢谢谢谢']" />
    <div class="detail-banner">
      <img :src="'../../static/img/detail-banner.png'" class="banner-pic"/>
      <div class="product-info">
        <div class="title">{{title}}</div>
        <div class="price-part">
          <span>夺宝价：Y</span>
          <span class="price">{{price}}</span>
        </div>
      </div>
    </div>
    <div class="tab-part">
      <div class="top-line"></div>
      <div class="triangle a" ></div>
      <div class="tab active">
        <span class="iconfont icon icon-jiangpai" />
        <span>战神榜</span>
      </div>
      <div class="triangle b" ></div>
      <div class="tab">
        <span>夺宝规则</span>
      </div>
    </div>
    <div class="tab-content">
      <div class='record-list'>
        <div class="record-item" v-for="record in topList">
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
              <span class="high-light">{{record.recordContent}}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="competition-part">
      <span>上期号段:</span>
      <div class="range">
        <span>{{competition.lastStart}}</span>
        <span>-</span>
        <span>{{competition.lastEnd}}</span>
      </div>
      <div class="open">
        <span>开奖时间:</span>
        <span>{{competition.mins}}</span>
        <span>分</span>
        <span>{{competition.second}}</span>
        <span>秒</span>
      </div>
    </div>
    <div class="history-part">
      <div>
        <menu-items text="战胜排行榜" icon="jiangpai" toLink='top' />
        <menu-items text="历史交战记录" icon="jiangpai" toLink='history' />
      </div>
      <div class="section-divider" ></div>
      <menu-items text="最近参战记录" icon="shijian" />
      <record-list :records="latestRecords"/>
    </div>
    <div class="action-part">
      <div class="action-btn buy-little">买小 (1-55)</div>
      <div class="action-btn buy-big">买大 (56-110)</div>
    </div>
  </div>
</template>

<script>
// import classnames from 'classnames'
import noticeBar from '../../components/top-notice'
import menuItems from '../../components/menu-item'
import recordList from '../../components/record-list'
let getTops = (num) => {
  return Array.from({length: num}).map((i, idx) => ({
    num: idx,
    recordContent: `刚刚获胜夺得商品${idx + 1}单`,
    userInfo: {
      nickName: '老亚平',
      from: '山东青岛'
    },
    date: '2017/06/30',
    time: '11:49:59',
    src: `../../static/img/p${idx % 6 + 1}.png`
  }))
}
let getLastest = (num) => {
  return Array.from({length: num}).map((i, idx) => ({
    num: idx,
    text: '刚刚参与了',
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
  data () {
    let topList = getTops(10)
    let latestRecords = getLastest(5)
    return {
      title: '100元联通充值卡',
      price: '55.00',
      latestRecords,
      competition: {
        lastStart: 56,
        lastEnd: 110,
        mins: '06',
        second: '32'
      },
      topList
    }
  },
  components: { noticeBar, menuItems, recordList }
}
</script>
