<template>
  <div class="bet-history page">
    <div class="list-container">
      <div class="item" v-for="item in list" :key="item.id">
        <div class="title">
          <span>产品单号:</span>
          <span class="red-cl">{{item.No}}</span>
        </div>
        <div class="info-part bg-white">
          <div class="avator">
            <img :src="item.avator" />
          </div>
          <div class="details">
            <div class="go-details">查看详情</div>
            <div>
              <span>获胜者:</span>
              <span class="blue-cl">{{item.winner}}</span>
            </div>
            <div>
              <span>购买号段: </span>
              <span class="red-cl">{{`${item.range.from}-${item.range.to}`}}</span>
            </div>
            <div>
              <span class="gray-cl">{{item.betType}}</span><span>号码:</span>
              <span class="red-cl">{{item.numbers.join(',')}}</span>
            </div>
            <div>
              <span>揭晓时间:</span>
              <span class="gray-cl">{{item.openTime}}</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>
<script>
import api from './api'

export default {
  name: 'battle-history',
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

