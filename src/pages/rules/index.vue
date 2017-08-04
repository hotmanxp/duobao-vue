<template>
  <div class="rules-page page bg-white">
    <p class="para">{{text}}<p/>
    <div class="pic-part">
      <img :src="picSrc" />
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      text: 'This is a simple text...',
      picSrc: '../../static/img/rules.png'
    }
  }
}
</script>

