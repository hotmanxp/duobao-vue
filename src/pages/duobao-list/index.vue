<template>
  <div class='duobao-list-page page'>
    <div class="title-part bg-white">夺宝记录</div>
    <div class="list-container">
      <div class="item gray-cl" v-for="item in list" :key="item.id">
        <div class="btn">查看号码</div>
        <div class="pic-part" >
          <img :src="item.src" />
          <div class="label tip">恭喜已获胜</div>
          <div class="get tip">点击领取</div>
        </div>
        <div class="details-part" >
          <div class="title">{{item.title}}</div>
          <div>
            <span>商品期数:</span>
            <span>{{item.No}}</span>
          </div>
          <div class="flex">
            <div class="left"><span>{{item.betType}}结果: </span><span class="red-cl">{{item.result.join(',')}}</span></div>
            <div class="right">获胜号码: <span class="red-cl">{{item.winNum}}</span></div>
          </div>
          <div class="flex">
            <div class="left">获胜参与者</div>
            <div class="right">选折号端</div>
          </div>
          <div class="flex">
            <div class="left">{{item.winner}}</div>
            <div class="right red-cl">{{`${item.range.from}-${item.range.to}`}}</div>
          </div>
          <div class="blue-cl">{{`([${item.ip.location})]${item.ip.ip}`}}</div>
          <div>
            <span>揭晓时间: </span>
            <span>{{item.openTime}}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import api from './api'
export default {
  name: 'record-list',
  beforeMount () {
    this.list = api.getList()
  },
  data () {
    return {
      list: []
    }
  }
}
</script>

