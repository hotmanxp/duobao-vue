<template>
  <div :class="`tabs-cmp ${customClass || ''}`">
    <div v-for="(tab, idx)  in tabs" :key="tab.value" :class="`tab ${current === idx ? 'active' : ''}`" @click="onChange(idx)">{{tab.text}}</div>
  </div>
</template>

<script>
export default {
  props: {
    tabs: Array,
    customClass: String,
    current: Number
  },
  methods: {
    onChange: function (idx) {
      this.$emit('tabChange', idx)
    }
  }
}
</script>

