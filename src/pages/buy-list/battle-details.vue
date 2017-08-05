<template>
  <div v-if="open" class="details-popup">
    <div class="cover"></div>
    <div class="battle-content" >
      <div class="title bg-white"><span class="red-cl">{{`${title.price}元`}}</span><span>联通充值卡</span></div>
      <div class="pk-part flex bg-white">
        <div class="home peple flex-1">
          <div class="head-bar">
            <span class="padding-tri"></span>
            <span>{{`${home.randge.start} - ${home.randge.end}`}}</span>
          </div>
          <div class="body-left"><peple :info="home" /></div>
        </div>
        <div class="pk-pic"></div>
        <div class="away peple flex-1">
          <div class="head-bar">
            <span class="padding-tri"></span>
            <span>{{`${home.randge.start} - ${home.randge.end}`}}</span>
          </div>
          <div class="body-right"><peple :info="home" /></div>
        </div>
      </div>
      <div class="result-part font-14">
        <div class="result"><span>开奖结果</span><span class="red-cl">{{result}}</span><span class="font-12 gray-cl">({{dateTime}})</span></div>
        <div class="rulse"><span>夺宝规则:</span><span>{{rulseText}}</span></div>
      </div>
      <div class="winner-info bg-white">
        <div class="result-bar">
          <span class="left-tri"></span>
          <span>开奖结果: </span>
          <span>{{winNum}}</span>
          <span class="label">获奖号段: </span>
          <span>{{`${randge.start}-${randge.end}`}}</span>
          <span class="right-tri"></span>
        </div>
        <div class="avator-part">
          <img :src="winnerSrc" />
        </div>
        <div class="winner-name"><span class="red-cl">获奖者: </span><span class="yellow-cl">{{winnerName}}</span></div>
      </div>
    </div>
    <div class="close iconfont icon-guanbi" @click="closeMe"></div>
  </div>
</template>

<script>
export default {
  props: ['open'],
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
      title: {
        price: 100,
        content: '联通卡'
      },
      rulseText: '除以52的余数',
      result: '12551',
      dateTime: '2017-04-30 14:00:52',
      winNum: '101',
      randge: {
        start: 20,
        end: 52
      },
      winnerName: '王二',
      winnerSrc: '../../static/img/p1.png',
      home: {
        randge: {
          start: 10,
          end: 20
        },
        date: '2017-06-22',
        time: '10:21:11',
        picSrc: '../../static/img/p1.png',
        nickName: 'tyy',
        from: '山东青岛',
        ip: '192.168.0.1'
      }
    }
  },
  methods: {
    closeMe: function () {
      this.$emit('closePopup')
    }
  }
}
</script>

