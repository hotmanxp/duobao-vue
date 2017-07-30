<template>
  <div class="menu-item">
        <span :class="`icon iconfont icon-${icon}`" />
        <span class="text">{{text}}</span>
        <span v-if="showNext || toLink" class="next iconfont icon-xiangyou" />
      </div>
</template>

<script>
export default {
  props: ['showNext', 'icon', 'text', 'toLink']
}
</script>
