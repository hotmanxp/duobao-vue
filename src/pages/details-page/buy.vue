<template>
  <div class="buy-action">
    <div v-if="open" class="cover"></div>
    <div :class="`action-pannel ${open ? 'show' : '' }`" >
      <div class="close">
        <div class="close-btn" @click="onClose()"><span class="iconfont icon-guanbi" /></div>
        <div class="vertical-line"></div>
      </div>
      <div class="pannel-bar">{{title}}</div>
      <div class="tips">参与单数</div>
      <div class="step">
        <span :class="`btn ${currentCounter === 1? 'disabled' : ''  }`" @click="onChange(-1)">-</span>
        <input class="num-input" :value="currentCounter" />
        <span class="btn" @click="onChange(1)">+</span>
      </div>
      <div class="count-btns">
        <span v-for="num in nums" v-text="num" :key="num" @click="onTap(num)"/>
      </div>
      <div class="totle">
        <span class="text">总需:</span>
        <span class="money">{{currentCounter * +price + '云币'}}</span>
      </div>
      <div class="pay-btn">微信支付</div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['open', 'price', 'onClose'],
  data () {
    return {
      title: '夺宝有风险，需谨慎',
      totle: 0,
      currentCounter: 1,
      nums: [1, 10, 20, 30, 50, 60, 80, 100]
    }
  },
  methods: {
    onTap: function (num) {
      this.currentCounter = num
    },
    onChange: function (extra) {
      if (extra !== -1 || this.currentCounter !== 1) this.currentCounter += extra
    }
  }

}
</script>

