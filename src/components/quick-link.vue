<template>
  <div class="quik-link-cmp" v-if="links && links.length !== 0">
    <router-link tag="div" v-for="link in links" :key="link.icon" :to="link.to || '/'" :class="` icon iconfont ${link.icon}`" ></router-link>
  </div>  
</template>

<script>
const mapObj = {
  home: {
    to: '/index',
    icon: 'icon-icon01'
  },
  personal: {
    to: '/personal',
    icon: 'icon-wode'
  },
  time: {
    icon: 'icon-shijian'
  }
}
export default {
  props: ['linksArray'],
  data () {
    const links = this.linksArray || []
    return {
      links: links.map((name) => mapObj[name])
    }
  }
}
</script>

