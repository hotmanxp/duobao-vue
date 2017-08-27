<template>
  <div class="notice-bar" v-if="noticesState && noticesState.length !== 0">
      <div class="content" :style="{top:0, left: `${left}%`, width: `${100 * noticesState.length}%`}">
        <span :style='{width: "100%", display: "inline-block"}' class="tips" v-for="tip of noticesState" :key="tip">{{ tip }}</span>
      </div>
    </div>
</template>

<script>
export default {
  name: 'Notice-bar',
  props: ['notices'],
  created () {
    let count = null
    this.$root.eventHub.$on('newMessage', (data) => {
      console.log(data)
      if (count) {
        this.noticesState.unshift(data)
        return
      }
      this.noticesState = [data]
      this.left = 0
      count = setInterval(() => {
        this.left += 0.5
        if (this.left > 100 * this.noticesState.length) {
          clearInterval(count)
          count = null
          this.noticesState = []
          this.left = 0
        }
      }, 100)
    })
  },
  data () {
    return {
      noticesState: [],
      left: 0
    }
  }
}
</script>


