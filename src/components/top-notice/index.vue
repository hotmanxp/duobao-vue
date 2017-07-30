<template>
  <div class="notice-bar" v-if="notices && notices.length !== 0">
      <span class="tips" v-for="tip of notices">{{ tip }}</span>
    </div>
</template>

<script>
export default {
  name: 'Notice-bar',
  props: ['notices'],
  data () {
    return {
    }
  }
}
</script>

