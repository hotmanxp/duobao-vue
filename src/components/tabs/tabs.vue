<template>
  <div :class="`tabs-cmp ${customClass || ''}`">
    <div v-for="(tab, idx)  in tabs" :key="tab.value" :class="`tab ${currentIdx === idx ? 'active' : ''}`" @click="onChange(idx)">{{tab.text}}</div>
  </div>
</template>

<script>
export default {
  props: {
    tabs: Array,
    customClass: String,
    defaultTabIdx: Number
  },
  data () {
    return {
      current: null
    }
  },
  computed: {
    currentIdx: function () {
      return this.current === null ? this.defaultTabIdx : this.current
    }
  },
  methods: {
    onChange: function (idx) {
      this.current = idx
      this.$emit('tabChange', idx)
    }
  }
}
</script>

