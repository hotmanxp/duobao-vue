<template>
  <div class="kan-pan-page page">
    <div class="title-part">
      <div class="cell">开奖时间</div>
      <div class="cell">开奖号码</div>
      <div class="cell">(56除余 + 1)</div>
      <div class="cell">(110除余 + 1)</div>
    </div>
    <div class="list-part">
      <div class="item" v-for="(item, idx) in list" :key="idx">
        <div class="cell time"><div>{{item.date}}</div><div>{{item.time}}</div></div>
        <div class="cell number">{{item.number}}</div>
        <div class="cell"><span :class="`btn ${item.divide56.color}`">{{item.divide56.num}}</span></div>
        <div class="cell"><span :class="`btn ${item.divide110.color}`">{{item.divide110.num}}</span></div>
      </div>
    </div>
  </div>
</template>
<script>
import api from './api'

export default {
  name: 'kan-pan',
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
