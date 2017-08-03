<template>
  <div class="bind-mobile-page page">
    <div class="intro-pic">
      <img src="../../assets/shoujibangding.png" />
    </div>
    <div class="form">
      <input placeholder="请输入手机号码" class="input" v-model="mobile"/>
      <div class="check-code flex">
        <input class="input" placeholder="请输入验证码" v-model="checkCode"/>
        <div @click="getCheckCode" :class="`btn send-btn flex-1 ${sendBtnDisabled || !isValidMobile ? 'disabled' : ''}`" >{{sendBtnDisabled ? `剩余${remainTime}s` : '点击发送验证码'}}</div>
      </div>
      <div :class="`btn confirm-btn ${canConfirm ? '' : 'disabled'}`" @click="send()">确定</div>
    </div>
  </div>
</template>

<script>
let timer = null
export default {
  data () {
    return {
      mobile: '',
      checkCode: '',
      remainTime: -1
    }
  },
  computed: {
    sendBtnDisabled: function () {
      return this.remainTime >= 0
    },
    canConfirm: function () {
      return !!this.mobile && !!this.checkCode
    },
    isValidMobile: function () {
      return !!this.mobile
    }
  },
  methods: {
    send: function () {
      console.log(this.mobile, this.checkCode)
    },
    getCheckCode: function () {
      if (timer) return
      this.remainTime = 30
      timer = setInterval(() => {
        --this.remainTime
        if (this.remainTime < 0) {
          clearInterval(timer)
          timer = null
        }
      }, 1000)
    }
  }
}
</script>
