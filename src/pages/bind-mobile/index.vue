<template>
  <div class="bind-mobile-page page">
    <div class="intro-pic">
      <img src="../../assets/shoujibangding.png" />
    </div>
    <div class="form">
      <input placeholder="请输入手机号码" class="input" v-model="mobile"/>
      <div class="check-code flex">
        <input class="input" placeholder="请输入验证码" v-model="checkCode"/>
        <div class="send-btn flex-1" >点击发送验证码</div>
      </div>
      <div class="confirm-btn" @click="send()">确定</div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      mobile: '',
      checkCode: ''
    }
  },
  methods: {
    send: function () {
      console.log(this.mobile, this.checkCode)
    }
  }
}
</script>
