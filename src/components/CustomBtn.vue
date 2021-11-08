<template>
  <button class="custom-btn" :class="{'custom-btn_secondary': secondary}">
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
    secondary: {
      type: Boolean,
      default: false
    }
  }
}
</script>