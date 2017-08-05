<template>
  <div v-if="open" class="details-popup">
    <div class="cover"></div>
    <div class="battle-content" >
      <div class="title bg-white"><span class="red-cl">{{`${details.title.price}元`}}</span><span>联通充值卡</span></div>
      <div class="pk-part flex bg-white">
        <div class="home peple flex-1">
          <div class="head-bar">
            <span class="padding-tri"></span>
            <span>{{`${details.home.randge.start} - ${details.home.randge.end}`}}</span>
          </div>
          <div class="body-left"><peple :info="details.home" /></div>
        </div>
        <div class="pk-pic"></div>
        <div class="away peple flex-1">
          <div class="head-bar">
            <span class="padding-tri"></span>
            <span>{{`${details.away.randge.start} - ${details.away.randge.end}`}}</span>
          </div>
          <div class="body-right"><peple :info="details.away" /></div>
        </div>
      </div>
      <div class="result-part font-14">
        <div class="result"><span>开奖结果</span><span class="red-cl">{{details.result}}</span><span class="font-12 gray-cl">({{details.dateTime}})</span></div>
        <div class="rulse"><span>夺宝规则:</span><span>{{details.rulseText}}</span></div>
      </div>
      <div class="winner-info bg-white">
        <div class="result-bar">
          <span class="left-tri"></span>
          <span>开奖结果: </span>
          <span>{{details.winNum}}</span>
          <span class="label">获奖号段: </span>
          <span>{{`${details.randge.start}-${details.randge.end}`}}</span>
          <span class="right-tri"></span>
        </div>
        <div class="avator-part">
          <img :src="details.winnerSrc" />
        </div>
        <div class="winner-name"><span class="red-cl">获奖者: </span><span class="yellow-cl">{{details.winnerName}}</span></div>
      </div>
    </div>
    <div class="close iconfont icon-guanbi" @click="closeMe"></div>
  </div>
</template>

<script>
export default {
  props: ['open', 'details'],
  components: {
    'peple': {
      props: ['info'],
      template: `<div class="peple-cmp">
        <div >{{info.date}}</div>
        <div >{{info.time}}</div>
        <img :src="info.picSrc" class="pic-avator" />
        <div class="yellow-cl nickName" >{{info.nickName}}</div>
        <div>{{info.from}}</div>
        <div>{{'['+info.ip+']'}}</div>
      </div>`
    }
  },
  data () {
    return {
    }
  },
  methods: {
    closeMe: function () {
      this.$emit('closePopup')
    }
  }
}
</script>

