<template>
  <div :style="{width: '100%'}">
    <top-bar v-if="topBarCfg.showFlag" :notices="topBarCfg.notices" @onFinish="onTopMessageShown" />
  </div>
</template>

<script>
  import topBar from './top-notice'
  import globalSvc from '@/global-service'
  const { topBarCfg } = globalSvc
  export default {
    data () {
      return {
        topBarCfg
      }
    },
    methods: {
      onTopMessageShown () {
        console.log('notice finish')
      }
    },
    components: {
      topBar
    }
  }

</script>
