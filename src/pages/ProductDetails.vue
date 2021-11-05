<template>
  <div></div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'ProductDetails',
  data() {
    return {
      data: null
    }
  },
  computed: {
    ...mapGetters({
      productById: 'productById'
    })
  },
  mounted() {
    this.data = this.productById[this.$route.query.id]
    window.document.title = `${this.data.title} | ${process.env.PRODUCT_NAME}`
  },
}
</script>