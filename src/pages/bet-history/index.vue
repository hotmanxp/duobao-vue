<template>
  <div class="bet-history page">
    <div class="list-container">
      <div class="item" v-for="item in list" :key="item.id">
        <div class="title">
          <span>产品单号:</span>
          <span class="red-cl">{{item.No}}</span>
        </div>
        <div class="info-part">
          <div class="avator"></div>
          <div class="details">
            <div>
              <span>获胜者:</span>
              <span>{{item.winner}}</span>
            </div>
            <div>
              <span>购买号段</span>
              <span></span>
            </div>
            <div>
              <span>{{item.betType}}</span><span>号码:</span>
              <span></span>
            </div>
            <div>
              <span>揭晓时间:</span>
              <span></span>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>
<script>
import {make} from '@/lib/mock'
let betTemp = {
  winner: '溜溜梅',
  No: 1254136941566
}
let list = make(betTemp, 20)
export default {
  data () {
    return {
      list
    }
  }
}
</script>

