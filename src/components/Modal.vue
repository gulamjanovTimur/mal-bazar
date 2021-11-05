<template>
  <div v-if="modelValue" class="modal">
    <div class="modal__main">
      <div class="modal__header modal-header">
        <slot name="header">
          <div class="modal-header__title">{{ headerTitle }}</div>
          <div class="modal-header__exit" @click="() => close()">
            <q-icon color="black" name="close" size="40px"/>
          </div>
        </slot>
      </div>
      <div class="modal__content">
        <slot></slot>
      </div>
    </div>
  </div>

</template>

<script>
// import vClickOutside from 'v-click-outside'
// import { lockBody } from 'src/utils'

export default {
  name: 'Modal',
  props: ['modelValue','headerTitle', 'btnText'],
  // directives: {
  //   clickOutside: vClickOutside.directive
  // },
  methods: {
    onClickOutside() {
      this.$emit('input', false)
    },
    submit() {
      this.$emit('input', false)
      this.$emit('submit')
    },
    close() {
      this.$emit('update:modelValue', false)
      this.$emit('close')
    }
  },
  // watch: {
  //   'value'() {
  //     lockBody(this.value)
  //   }
  // }
  mounted() {
    // console.log(this.value)
  }
}

</script>
