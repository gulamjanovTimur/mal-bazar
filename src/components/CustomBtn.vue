<template>
  <button :disabled="isLoading" class="custom-btn" :class="{'custom-btn_secondary': secondary}">
    <template v-if="!isLoading">{{name}}</template>
    <div v-else class="custom-btn-loader">
      <img src="static/icons/logo.png" alt="logo-loader">
    </div>
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
    },
    isLoading: {
      type: Boolean,
      default: false
    }
  }
}
</script>