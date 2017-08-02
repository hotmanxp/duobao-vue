<template>
  <div class="buy-list-page page">
    <div class="list-container">
      <div class="item" v-for="item in list" :key="item.id">
        <div class="info-part">
          <div class="pic-part">
            <img :src="item.picSrc" class="pic"/>
            <div :class="`label ${item.type}`"></div>
          </div>
          <div class="detail-part">
            <div>{{item.title}}</div>
            <div><span>本期参与: </span><span class="yellow-cl">{{item.canyu}}</span></div>
            <div><span>参与时间: </span><span>{{`${item.takePartDate} ${item.takePartTime}`}}</span></div>
            <div class="red-cl">
              <span>参与段号: </span>
              <span>{{`${item.duanHao.start}-${item.duanHao.end}`}}</span>
              <span>{{` X ${item.num}`}}</span>
            </div>
            <div v-if="item.type !== 'waiting'">
              <span>开奖时间: </span>
              <span>{{`${item.openDate} ${item.openTime}`}}</span>
            </div>
            <div v-if="item.type !== 'waiting'"><span>获胜号码: </span><span class="red-cl">{{item.winNumber}}</span></div>
          </div>
        </div>
        <div class="action-part"><div class="btn">查看详情</div></div>
      </div>
    </div>
  </div>
</template>

<script>
import {make} from '@/lib/mock'
const template = {
  type: ['win', 'unwin', 'waiting', true],
  picSrc: '../../static/img/p1.png',
  title: '联通100元充值卡',
  canyu: 'tyy',
  takePartDate: '2017-06-30',
  takePartTime: '15:00:06',
  duanHao: {
    start: 22,
    end: 55
  },
  num: 34,
  openTime: '14:10:01',
  openDate: '2017-07-26',
  winNumber: 105
}
const list = make(template, 10)
export default {
  data () {
    return {
      list
    }
  }
}
</script>
