<template>
  <button class="custom-btn" :class="{customClass, 'custom-btn_secondary': secondary}">
    {{name}}
  </button>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      default: 'ПОДТВЕРДИТЬ'
    },
    customClass: {
      type: String,
      default: ''
    },
    secondary: {
      type: Boolean,
      default: false
    }
  }
}
</script>