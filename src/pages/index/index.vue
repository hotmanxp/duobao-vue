<template>
  <div class="index-page page">
   <div class="notice-bar"> <span class="tips" v-for="tip in notice">{{ tip }}</span> </div>
   <div class="banner-part">
   </div>
  </div>
</template>

<script>
export default {
  name: 'index-page',
  data () {
    return {
      notice: ['恭喜 胡柚获胜2单', '恭喜 胡柚获胜3单', '恭喜 胡柚获胜4单']
    }
  }
}
</script>
